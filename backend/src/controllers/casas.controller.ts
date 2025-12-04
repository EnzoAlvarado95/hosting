import { Request, Response } from "express";
import { pool } from "../database/db";

export const getCasas = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query("SELECT * FROM casas");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener casas:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getIdCasas = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const [row] = await pool.query("SELECT * FROM casas WHERE id= ?", [id])
        res.json(row);
    } catch (error) {
        console.error("Error al obtener casas:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const postCasas = async (req: Request, res: Response) => {
    const { titulo, descripcion, precio, ubicacion } = req.body;
    try {
        await pool.query("INSERT INTO casas (titulo, descripcion, precio, ubicacion) VALUES (?,?,?,?)",
            [titulo, descripcion, precio, ubicacion])
        res.json("Ha registro con exito")
    } catch (error) {
        console.error("Error al obtener casas:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateCasas = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { titulo, descripcion, precio, ubicacion } = req.body;
    const sql = "UPDATE casas SET titulo = ?, descripcion = ?, precio = ?, ubicacion = ? WHERE id = ? "
    try {
        await pool.query(sql, [titulo, descripcion, precio, ubicacion, id])
        res.json("Ha modificado")
    } catch (error) {
        console.error("Error al obtener casas:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const deleteCasas = async (req:Request, res: Response)=>{
    const {id}= req.params;
    try{
        await pool.query("DELETE FROM casas WHERE id = ?",
            [id])
        res.json("Ha eliminado")
    }catch(error){
         console.error("Error al obtener casas:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}
