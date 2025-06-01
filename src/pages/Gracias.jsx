// src/pages/Gracias.jsx

import { Link } from "react-router-dom";

function Gracias() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 text-center">
      <img
        src="/logo-goya.png"
        alt="Logo Goya"
        className="w-32 mb-6 drop-shadow"
      />

      <h1 className="text-3xl font-bold text-blue-800 mb-2">Gracias por contactarnos</h1>
      <p className="text-gray-600 max-w-md mb-6">
        Hemos recibido tu mensaje. Nuestro equipo se pondrá en contacto contigo lo antes posible.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
        >
          Volver al inicio
        </Link>

        <a
          href="https://wa.me/50250362856"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-blue-700 text-blue-700 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Gracias;

