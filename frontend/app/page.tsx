"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [casas, setCasas] = useState([]);

  useEffect(() => {
    const fetchCasas = async () => {
      const res = await fetch("http://localhost:4000/api/casas");
      const data = await res.json();
      setCasas(data);
    };

    fetchCasas();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800">
          🏡 Casas disponibles
        </h1>

        <div className="flex gap-3">
          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
              Login
            </button>
          </Link>

          <Link href="/admin">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow">
              Admin
            </button>
          </Link>
        </div>
      </header>

      {/* GRID DE CASAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {casas.map((casa: any) => (
          <Link key={casa.id} href={`/casas/${casa.id}`}>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">

              {/* Imagen */}
              <div className="h-48 bg-gray-200">
                {casa.imagen ? (
                  <img
                    src={casa.imagen}
                    alt={casa.titulo}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Sin imagen
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-4">
                <h2 className="font-bold text-xl text-gray-900">
                  {casa.titulo}
                </h2>

                <p className="text-gray-600 line-clamp-2">
                  {casa.descripcion}
                </p>

                <p className="text-lg font-bold text-blue-600 mt-3">
                  ${casa.precio}
                </p>

                <p className="text-sm text-gray-500">
                  📍 {casa.ubicacion}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
