"use client";
import { useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e:any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/auth/forgot", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email })
    });
    const data = await res.json();
    setMsg(data.message || "Si existe, recibirás un correo.");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl mb-4">Recuperar contraseña</h1>
      {msg && <div className="mb-3 text-green-700">{msg}</div>}
      <form onSubmit={submit}>
        <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border rounded" placeholder="Tu correo" />
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </div>
  );
}
