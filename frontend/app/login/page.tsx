// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch("http://localhost:4000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         return setError(data.message || "Error al iniciar sesión");
//       }

//       // guardar token
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(data.user));

//       router.push("/welcome");

//     } catch (err) {
//       setError("Error de conexión");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-indigo-700 p-4">
      
//       {/* CONTENEDOR */}
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Iniciar Sesión
//         </h1>

//         {/* MENSAJE DE ERROR */}
//         {error && (
//           <p className="mb-4 text-red-600 bg-red-100 p-2 rounded text-center">
//             {error}
//           </p>
//         )}

//         {/* FORMULARIO */}
//         <form onSubmit={handleSubmit} className="space-y-4">
          
//           <div>
//             <label className="text-sm font-medium text-gray-700">
//               Correo electrónico
//             </label>
//             <input
//               type="email"
//               className="w-full border mt-1 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="correo@ejemplo.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium text-gray-700">
//               Contraseña
//             </label>
//             <input
//               type="password"
//               className="w-full border mt-1 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="Tu contraseña"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md transition"
//           >
//             Entrar
//           </button>
//         </form>

//         {/* LINKS */}
//         <div className="mt-6 text-center text-sm text-gray-600">
//           ¿No tienes cuenta?{" "}
//           <Link href="/register" className="text-blue-600 hover:underline">
//             Regístrate
//           </Link>
//         </div>

//         <div className="mt-2 text-center text-sm">
//           <Link href="/forgot" className="text-red-600 hover:underline">
//             Olvidé mi contraseña
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // URL del backend desde variable de entorno
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return setError(data.message || "Error al iniciar sesión");
      }

      // guardar token y usuario en localStorage de manera segura
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // redirigir a página de bienvenida
      router.push("/welcome");

    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-indigo-700 p-4">
      {/* CONTENEDOR */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h1>

        {/* MENSAJE DE ERROR */}
        {error && (
          <p className="mb-4 text-red-600 bg-red-100 p-2 rounded text-center">
            {error}
          </p>
        )}

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full border mt-1 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full border mt-1 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md transition"
          >
            Entrar
          </button>
        </form>

        {/* LINKS */}
        <div className="mt-6 text-center text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Regístrate
          </Link>
        </div>

        <div className="mt-2 text-center text-sm">
          <Link href="/forgot" className="text-red-600 hover:underline">
            Olvidé mi contraseña
          </Link>
        </div>
      </div>
    </div>
  );
}
