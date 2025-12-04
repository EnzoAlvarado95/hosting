import { Request, Response } from "express";
import { pool } from "../database/db"; // tu pool mysql
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { sendMail } from "../services/mailer";
import { validatePassword } from "../utils/password";
import dotenv from "dotenv";
dotenv.config();

const FRONT = process.env.FRONTEND_URL || "http://localhost:3000";
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const formatDate = (d: Date) => d.toISOString().slice(0,19).replace("T"," ");


export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "Faltan datos" });

    // validar contraseña
    const { ok, errors } = validatePassword(password);
    if (!ok) return res.status(400).json({ message: "Contraseña inválida", errors });

    // verificar si existe email
    const [exists] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
    if ((exists as any).length) return res.status(400).json({ message: "Email ya registrado" });

    // hash password
    const hashed = await bcrypt.hash(password, 10);

    // token de activación (aleatorio)
    const activationToken = crypto.randomBytes(32).toString("hex");

    // insertar usuario inactivo
    const [result]: any = await pool.query(
      "INSERT INTO users (name,email,password,active,activation_token) VALUES (?,?,?,?,?)",
      [name, email, hashed, 0, activationToken]
    );

    // enviar correo de activación
    const activateLink = `${FRONT}/activate?token=${activationToken}&email=${encodeURIComponent(email)}`;
    const html = `<p>Hola ${name},</p>
      <p>Haz clic para activar tu cuenta:</p>
      <a href="${activateLink}">${activateLink}</a>
      <p>Si no solicitaste esto, ignora este correo.</p>`;

    await sendMail(email, "Activa tu cuenta", html);

    res.json({ message: "Registrado. Revisa tu correo para activar la cuenta." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno" });
  }
};

export const activate = async (req: Request, res: Response) => {
  try {
    const { token, email } = req.body;
    if (!token || !email) return res.status(400).json({ message: "Faltan datos" });

    const [rows]: any = await pool.query("SELECT id FROM users WHERE email = ? AND activation_token = ?", [email, token]);
    if (!rows.length) return res.status(400).json({ message: "Token inválido" });

    await pool.query("UPDATE users SET active = 1, activation_token = NULL WHERE id = ?", [rows[0].id]);
    res.json({ message: "Cuenta activada. Ya puedes iniciar sesión." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Faltan datos" });

    const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (!rows.length) return res.status(401).json({ message: "Credenciales inválidas" });

    const user = rows[0];
    if (!user.active) return res.status(403).json({ message: "Cuenta no activada. Revisa tu correo." });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Credenciales inválidas" });

    // emitir JWT
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "8h" });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno" });
  }
};

export const forgot = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Faltan datos" });

    const [rows]: any = await pool.query("SELECT id,name FROM users WHERE email = ?", [email]);
    if (!rows.length) return res.json({ message: "Si existe el correo recibirás un email para recuperar la contraseña." });

    const user = rows[0];
    const resetToken = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 hora

await pool.query(
  "UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?",
  [resetToken, formatDate(expires), user.id]
);

    const resetLink = `${FRONT}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`;
    const html = `<p>Hola ${user.name},</p>
      <p>Haz clic para restablecer tu contraseña (válido 1 hora):</p>
      <a href="${resetLink}">${resetLink}</a>`;

    await sendMail(email, "Recuperar contraseña", html);

    res.json({ message: "Si existe el correo recibirás un email para recuperar la contraseña." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno" });
  }
};

export const reset = async (req: Request, res: Response) => {
  try {
    const { email, token, password } = req.body;
    if (!email || !token || !password) return res.status(400).json({ message: "Faltan datos" });

    // validar password
    const { ok, errors } = validatePassword(password);
    if (!ok) return res.status(400).json({ message: "Contraseña inválida", errors });

    const [rows]: any = await pool.query("SELECT id, reset_expires FROM users WHERE email = ? AND reset_token = ?", [email, token]);
    if (!rows.length) return res.status(400).json({ message: "Token inválido" });

    const user = rows[0];
    const expires = new Date(user.reset_expires);
    if (expires < new Date()) return res.status(400).json({ message: "Token expirado" });

    const hashed = await bcrypt.hash(password, 10);
    await pool.query("UPDATE users SET password = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?", [hashed, user.id]);

    res.json({ message: "Contraseña actualizada. Ya puedes iniciar sesión." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno" });
  }
};
