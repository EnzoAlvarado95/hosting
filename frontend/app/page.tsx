"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [casas, setCasas] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
       {/* Header fijo */}
      <header className="bg-white shadow-sm py-4 px-4 sm:px-6 fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
          <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-tight">
            🏡 Andali.com.mx
          </h1>

          <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-0">
            <Link href="/login">
              <button className="px-3 sm:px-5 py-2 rounded-xl border border-red-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
                Login
              </button>
            </Link>

            <Link href="/register">
              <button className="px-3 sm:px-5 py-2 rounded-xl border border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
                Registro
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* PORTADA / HERO */}
      <section
        className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center mt-16 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=60')",
        }}
      >
        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-6 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
            Encuentra la casa de tus sueños
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            Casas modernas, cómodas y listas para habitar. Todo en un solo lugar.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="#listado">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-200 transition">
                Ver casas disponibles
              </button>
            </Link>

            <Link href="/contacto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition">
                Contáctanos
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* LISTADO DE CASAS */}
      <main id="listado" className="max-w-6xl mx-auto p-6 flex-1">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Casas disponibles
        </h3>

        <p className="text-gray-600 text-lg">
          Explora nuestra selección de propiedades en huespedes.
        </p>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

 {/**Casa Travel */}
<Link href="/travel">
  <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center cursor-pointer">
    {/* Foto grande arriba */}
    <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
      <img
        src="travel/travel10.jpeg"
        alt="Casa Travel"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Foto circular */}
    <div className="flex justify-center mb-4">
      <img
        src="travel/travel6.jpeg"
        alt="Travel"
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md -mt-10"
      />
    </div>
    {/* Título */}
    <h2 className="text-xl font-semibold text-gray-800">Casa Travel</h2>
    {/* Descripción */}
    <p className="text-gray-600 text-sm mt-2">
      Aquí aparecerán las casas en huéspedes.
    </p>
  </div>
</Link>

  {/**Casa Green */}
<Link href="/green">
  <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center cursor-pointer">
    {/* Foto grande arriba */}
    <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
      <img
        src="green/green18.jpeg"
        alt="Casa Green"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Foto circular */}
    <div className="flex justify-center mb-4">
      <img
        src="green/green15.jpeg"
        alt="Green"
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md -mt-10"
      />
    </div>
    {/* Título */}
    <h2 className="text-xl font-semibold text-gray-800">Casa Green</h2>
    {/* Descripción */}
    <p className="text-gray-600 text-sm mt-2">
      Aquí aparecerán las casas en huéspedes.
    </p>
  </div>
</Link>

{/**Vazquez del Mercado */}
<Link href="/vazquezmercado">
  <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center cursor-pointer">
    {/* Foto grande arriba */}
    <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
      <img
        src="/Agua16.jpeg"
        alt="Vazquez del mercado"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Foto circular */}
    <div className="flex justify-center mb-4">
      <img
        src="/Agua11.jpeg"
        alt="Vazquez del mercado"
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md -mt-10"
      />
    </div>
    {/* Título */}
    <h2 className="text-xl font-semibold text-gray-800">Vazquez del Mercado</h2>
    {/* Descripción */}
    <p className="text-gray-600 text-sm mt-2">
      Aquí aparecerán las casas en huéspedes.
    </p>
  </div>
</Link>

{/**Casa Animas */}
<Link href="/animas">
  <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center cursor-pointer">
    {/* Foto grande arriba */}
    <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
      <img
        src="animas/animas3.jpeg"
        alt="Casa Animas"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Foto circular */}
    <div className="flex justify-center mb-4">
      <img
        src="animas/animas16.jpeg"
        alt="Animas"
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md -mt-10"
      />
    </div>
    {/* Título */}
    <h2 className="text-xl font-semibold text-gray-800">Casa Tío</h2>
    {/* Descripción */}
    <p className="text-gray-600 text-sm mt-2">
      Aquí aparecerán las casas en huéspedes.
    </p>
  </div>
</Link>

  {/**Casa Gris */}
<Link href="/gris">
  <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center cursor-pointer">
    {/* Foto grande arriba */}
    <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
      <img
        src="gris/gris10.jpeg"
        alt="Casa Gris"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Foto circular */}
    <div className="flex justify-center mb-4">
      <img
        src="gris/gris2.jpeg"
        alt="Gris"
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md -mt-10"
      />
    </div>
    {/* Título */}
    <h2 className="text-xl font-semibold text-gray-800">Casa Gris</h2>
    {/* Descripción */}
    <p className="text-gray-600 text-sm mt-2">
      Aquí aparecerán las casas en huéspedes.
    </p>
  </div>
</Link>

{/**Casa Agua */}
<Link href="/agua">
  <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center cursor-pointer">
    {/* Foto grande arriba */}
    <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
      <img
        src="agua/Agua16.jpeg"
        alt="Casa Agua"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Foto circular */}
    <div className="flex justify-center mb-4">
      <img
        src="agua/Agua11.jpeg"
        alt="Foto"
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md -mt-10"
      />
    </div>
    {/* Título */}
    <h2 className="text-xl font-semibold text-gray-800">Casa Agua</h2>
    {/* Descripción */}
    <p className="text-gray-600 text-sm mt-2">
      Aquí aparecerán las casas en huéspedes.
    </p>
  </div>
</Link>



</div>

<h2 className="text-xl font-semibold text-gray-800 p-6">
  Detalle de persona
</h2>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md w-72">
  <img
    src="personaje/alicia.jpeg"
    alt="Foto"
    className="w-32 h-32 rounded-full object-cover mb-4"
  />

  <h2 className="text-xl font-semibold text-gray-800">Martha Alicia</h2>

  <p className="text-gray-600 text-center mt-2">
    Administradora de casas y responsable
  </p>
</div>
<div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md w-72">
  <img
    src="personaje/andres.jpeg"
    alt="Foto"
    className="w-32 h-32 rounded-full object-cover mb-4"
  />

  <h2 className="text-xl font-semibold text-gray-800">Martin Andres</h2>

  <p className="text-gray-600 text-center mt-2">
    A fumar luego a limpiar luego manejar
  </p>
</div>

<div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md w-72">
  <img
    src="personaje/Enzo.jpeg"
    alt="Foto"
    className="w-32 h-32 rounded-full object-cover mb-4"
  />

  <h2 className="text-xl font-semibold text-gray-800">ING. Carlos Eduardo</h2>

  <p className="text-gray-600 text-center mt-2">
    Estudia en la Universidad Tecnologia de Aguascalientes la carrera es Desarrollo Software Multiplataforma.
  </p>
</div>
</div>
<div className="fixed bottom-4 right-4 flex flex-col gap-3 z-[1000]">
        <a
          href="https://wa.me/524493369838"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-400 transition"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.51 0-9.98 4.46-9.98 9.97 0 1.77.47 3.44 1.29 4.88L2 22l5.37-1.38a9.91 9.91 0 0 0 4.67 1.15c5.52 0 10-4.46 10-9.98S17.56 2 12.04 2zm0 18a8.03 8.03 0 0 1-4.03-1.12l-.28-.17-3.18.81.85-3.09-.18-.29A7.97 7.97 0 0 1 4.04 12c0-4.42 3.6-8.02 8.02-8.02s8.02 3.6 8.02 8.02-3.6 8.02-8.02 8.02zm4.52-6.77c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4-.14 0-.3-.02-.46-.02s-.42.06-.64.3c-.22.24-.86.84-.86 2.05s.88 2.37 1 2.54c.12.16 1.7 2.6 4.12 3.64 2.42 1.04 2.42.7 2.86.66.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.12-.22-.18-.46-.3z"/>
          </svg>
        </a>
      </div>

      </main>

   {/* Footer */}
      <footer className="mt-10">

        {/* Imagen de fondo pegada */}
        <div
          className="w-full h-40 sm:h-48 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=60')",
          }}
        >
          <div className="w-full h-full bg-black/40 flex items-center justify-center">
            <p className="text-white text-sm sm:text-lg font-medium tracking-wide">
              Tu nuevo hogar te espera ✨
            </p>
          </div>
        </div>

        {/* Footer profesional */}
        <div className="bg-gray-900 text-gray-300 pt-6 sm:pt-10 pb-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* Columna 1 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">🏡 Andali.com.mx</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Ayudamos a las personas a encontrar el hogar perfecto con confianza, huéspedes y atención personalizada.
              </p>
            </div>

            {/* Columna 2 - Información */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Información de contacto</h4>
              <p className="mb-1 text-sm sm:text-base">📞 <span className="font-medium">+52 449 336 9838</span></p>
              <p className="mb-1 text-sm sm:text-base">📧 <span className="font-medium">marthaaliciaalvarado837@gmail.com</span></p>
              <p className="mb-1 text-sm sm:text-base">📍 Aguascalientes, México</p>
              <p className="mt-1 sm:mt-2 text-gray-400 text-xs sm:text-sm">Horario: Lunes a Sábado — 9:00 AM a 6:00 PM</p>
            </div>

            {/* Columna 3 - Enlaces */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Enlaces rápidos</h4>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><a href="/" className="hover:text-white transition">🏠 Inicio</a></li>
                <li><a href="/casas" className="hover:text-white transition">🏡 Casas disponibles</a></li>
                <li><a href="/contacto" className="hover:text-white transition">📨 Contacto</a></li>
                <li><a href="/login" className="hover:text-white transition">🔐 Login</a></li>
                <li><a href="/admin" className="hover:text-white transition">🔐 Admin</a></li>
              </ul>
            </div>

          </div>

          {/* Créditos finales */}
          <div className="text-center text-gray-500 text-xs sm:text-sm border-t border-gray-700 mt-6 sm:mt-8 pt-3 sm:pt-4">
            © {new Date().getFullYear()} Andali.com.mx — Todos los derechos reservados.
          </div>
        </div>
      </footer>



    </div>
  );
}
