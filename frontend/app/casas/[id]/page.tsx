"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";

interface Casa {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  ubicacion: string;
}

export default function CasaDetalle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  // 👇 Next.js 16 obliga a usar use() para leer params
  const { id } = use(params);

  const [casa, setCasa] = useState<Casa | null>(null);

  useEffect(() => {
    const fetchCasa = async () => {
      const res = await fetch(`http://localhost:4000/api/casas/${id}`);
      const data = await res.json();
      setCasa(data[0]);
    };

    fetchCasa();
  }, [id]);

  if (!casa) return <p>Cargando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{casa.titulo}</h1>
      <p className="mt-2">{casa.descripcion}</p>
      <p className="font-bold mt-4 text-xl">${casa.precio}</p>
      <p>{casa.ubicacion}</p>
      <Link href={`/casas/${casa.id}/edit`}>
  <button className="mt-3 bg-blue-600 text-white rounded px-3 py-1">
    Editar
  </button>
</Link>

    </div>
    
  );
  
}
