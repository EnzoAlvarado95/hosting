"use client";

import Link from "next/link";
import { useState } from "react";

export default function CasaAgua() {
  const [fotoSeleccionada, setFotoSeleccionada] = useState<string | null>(null);

  const fotos = [
    "animas/animas1.jpeg",
    "animas/animas2.jpeg",
    "animas/animas3.jpeg",
    "animas/animas4.jpeg",
    "animas/animas5.jpeg",
    "animas/animas6.jpeg",
    "animas/animas7.jpeg",
    "animas/animas8.jpeg",
    "animas/animas9.jpeg",
    "animas/animas10.jpeg",
    "animas/animas11.jpeg",
    "animas/animas12.jpeg",
    "animas/animas13.jpeg",
    "animas/animas14.jpeg",
    "animas/animas15.jpeg",
    "animas/animas16.jpeg",
    "animas/animas17.jpeg",
    "animas/animas18.jpeg",
    "animas/animas19.jpeg",
    "animas/animas20.jpeg",
    "animas/animas21.jpeg",
    "animas/animas22.jpeg",
    "animas/animas23.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Header fijo */}
      <header className="bg-white shadow-sm py-4 px-4 sm:px-6 fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
          <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-tight">
            🏡 Andali.com.mx
          </h1>

          <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-0">
            <Link href="/login">
              <button className="px-3 sm:px-5 py-2 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
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

      {/* Contenedor principal con margen superior para el header */}
      <div className="max-w-5xl mx-auto p-4 sm:p-6 pt-28">

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Casa Animas</h1>

        {/* Subtítulo */}
        <p className="text-gray-800 text-base sm:text-lg mb-6">
          Una estancia perfecta para relajarte y disfrutar de un entorno tranquilo y natural.
        </p>

        {/* Imagen principal */}
        <div className="w-full h-48 sm:h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-10">
          <img
            src="animas/animas16.jpeg"
            alt="Casa Gris"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detalles de la casa */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Detalles de la casa</h2>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
            Esta hermosa casa combina confort y estilo con espacios amplios,
            luz natural y una atmósfera relajante. Ideal para familias, parejas
            o grupos que buscan desconectarse y disfrutar de momentos inolvidables.
            Cuenta con una excelente ubicación, privacidad y áreas bien equipadas
            para una estancia plena.
          </p>
        </div>

        <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Dirección de la Casa Animas</h2>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
            Colonia: Paseo de Aguascalientes Calle Paseo de las animas #119 Aguascalientes, Mexico 
          </p>
        </div>

       <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow mb-6">
  <h2 className="text-xl sm:text-2xl font-semibold mb-3">Link enlace</h2>
  <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
    <a
      href="https://www.airbnb.com/h/andalianimas"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      airbnb.com/h/andalianimas
    </a>
  </p>
</div>


        {/* Características */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Características</h3>
          <ul className="text-gray-800 list-disc ml-5 sm:ml-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>5 huéspedes</li>
            <li>3 habitaciones</li>
            <li>3 camas</li>
            <li>1 baño</li>
          </ul>
        </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow mb-10">
          <h3 className="text-2xl font-semibold mb-4">Lo que ofrece este lugar</h3>
          <ul className="text-gray-800 list-disc ml-6 space-y-2">
            <h3 className="text-2xl">Baño</h3>
            <li>Jabón corporal</li>
            <li>Agua caliente</li>
            <li>Gel para baño</li>
            <h3 className="text-2xl">Habitación y lavandería</h3>
            <li>Lavadora: Gratis, en el alojamiento</li>
            <li>Elementos básicos</li>
            <li>Ganchos</li>
            <li>Ropa de cama</li>
            <li>Persianas o cortinas opacas</li>
            <li>Plancha</li>
            <li>Tendedero para ropa</li>
            <li>Espacio para guardar ropa: clóset</li>
            <h3 className="text-2xl">Entretenimiento</h3>
            <li>Conexión Ethernet</li>
            <li>Televisión con pantalla de 40" y Roku</li>
            <h3 className="text-2xl">Calefacción</h3>
            <li>Ventiladores de techo</li>
            <h3>Seguridad en el hogar</h3>
            <li>Detector de humo</li>
            <li>Detector de monóxido de carbono</li>
            <li>Extintor de incendidos</li>
            <h3 className="text-2xl">Internet y oficina</h3>
            <li>Wifi</li>
            <li>Área para trabajar</li>
            <h3 className="text-2xl">Cocina y comedor</h3>
            <li>Cocina</li>
            <li>Refrigerador</li>
            <li>Microondas</li>
            <li>Artículos básicos de cocina</li>
            <li>Platos y cubiertos</li>
            <li>Congelador</li>
            <li>Estufa de gas</li>
            <li>Horno</li>
            <li>Cafetera de filtro</li>
            <li>Licuadora</li>
            <li>Mesa de comedor</li>
            <h3 className="text-2xl">Exterior</h3>
            <li>Jardín privado</li>
            <h3 className="text-2xl">Estacionamiento e instalaciones</h3>
            <li>Estacionamiento gratuito en las instalaciones</li>
            <h3 className="text-2xl">Servicios</h3>
            <li>Se admiten mascotas</li>
            <li>Disponible para estancias largas</li>
            <li>Recepción por parte del anfitrión</li>
            <h3 className="text-2xl">No incluidos</h3>
            <li>Cámaras de seguridad exteriores en la propiedad</li>
            <li>Secadora</li>
            <li>Aire acondicionado</li>
            <li>Calefacción</li>
            <li>Elementos básicos</li>
          </ul>
        </div>


        {/* Galería */}
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Galería de fotos</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-10">
          {fotos.map((foto, index) => (
            <img
              key={index}
              src={foto}
              alt={`Foto ${index + 1}`}
              className="w-full h-32 sm:h-40 object-cover rounded-xl shadow cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setFotoSeleccionada(foto)}
            />
          ))}
        </div>

      </div>

      {/* Modal Lightbox */}
      {fotoSeleccionada && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999] cursor-pointer"
          onClick={() => setFotoSeleccionada(null)}
        >
          <img
            src={fotoSeleccionada}
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-lg animate-fadeIn"
          />
        </div>
      )}

      {/* Botones flotantes WhatsApp y Facebook */}
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
