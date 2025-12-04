"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPassword() {
  const sp = useSearchParams();
  const token = sp.get("token");
  const email = sp.get("email");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const submit = async (e:any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/auth/reset", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, token, password: pw })
    });
    const data = await res.json();
    if (!res.ok) { setMsg(data.message || "Error"); return; }
    setMsg(data.message || "Contraseña cambiada");
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl mb-4">Restablecer contraseña</h1>
      <form onSubmit={submit}>
        <input type="password" required value={pw} onChange={e=>setPw(e.target.value)} className="w-full p-2 border rounded" placeholder="Nueva contraseña" />
        <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">Cambiar</button>
      </form>
      {msg && <div className="mt-3">{msg}</div>}
    </div>
  );
}
