"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<string[]>([]);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors([]);
    setMsg("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      // 🟥 Si el servidor responde 500 o 400
      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setMsg(data.message || "Error interno del servidor");
        }
        return;
      }

      // 🟩 Registro correcto
      setMsg(data.message || "Registrado. Revisa tu correo.");
      setForm({ name: "", email: "", password: "" });

    } catch (error) {
      setMsg("No se pudo comunicar con el servidor.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Registro</h1>

      {msg && <div className="mb-3 text-green-700">{msg}</div>}

      {errors.length > 0 && (
        <ul className="mb-3 text-red-600">
          {errors.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Nombre"
          className="w-full p-2 border rounded"
        />

        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />

        <input
          required
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Contraseña"
          className="w-full p-2 border rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Registrar
        </button>
      </form>
    </div>
  );
}
