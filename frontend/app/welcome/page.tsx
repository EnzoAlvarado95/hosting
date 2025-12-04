"use client";

export default function Bienvenida() {
  const user = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : {};

  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenido, {user.name || "Usuario"} 👋</h1>
      <p>Has iniciado sesión correctamente.</p>
    </div>
  );
}
