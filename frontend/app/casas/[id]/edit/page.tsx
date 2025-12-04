"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Casa {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  ubicacion: string;
}

export default function EditCasa({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // obtener ID con Next.js 16

  const router = useRouter();

  const [casa, setCasa] = useState<Casa>({
    id: Number(id),
    titulo: "",
    descripcion: "",
    precio: 0,
    ubicacion: "",
  });

  // Cargar valores actuales
  useEffect(() => {
    const fetchCasa = async () => {
      const res = await fetch(`http://localhost:4000/api/casas/${id}`);
      const data = await res.json();
      setCasa(data[0]);
    };
    fetchCasa();
  }, [id]);

  // Guardar cambios
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(`http://localhost:4000/api/casas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(casa),
    });

    alert("Casa modificada correctamente");
    router.push(`/casas/${id}`);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar Casa</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-bold">Título</label>
          <input
            type="text"
            value={casa.titulo}
            onChange={(e) => setCasa({ ...casa, titulo: e.target.value })}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-bold">Descripción</label>
          <textarea
            value={casa.descripcion}
            onChange={(e) => setCasa({ ...casa, descripcion: e.target.value })}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-bold">Precio</label>
          <input
            type="number"
            value={casa.precio}
            onChange={(e) =>
              setCasa({ ...casa, precio: Number(e.target.value) })
            }
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-bold">Ubicación</label>
          <input
            type="text"
            value={casa.ubicacion}
            onChange={(e) => setCasa({ ...casa, ubicacion: e.target.value })}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}
