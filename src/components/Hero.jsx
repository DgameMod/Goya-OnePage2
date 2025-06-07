// Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-start"
      style={{ backgroundImage: "url('/hero-fondo1.jpg')" }}
    >
      {/* Logo blanco más grande */}
      <div className="absolute top-6 left-6">
        <img
          src="/logo-goya-blanco.png" // Este debe estar en /public
          alt="Logo Goya"
          className="w-36 md:w-48" // Más grande
        />
      </div>

      {/* Contenido alineado a la izquierda con fondo translúcido */}
      <div className="ml-6 md:ml-24 bg-black/30 p-8 rounded-xl max-w-xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Calidad que transforma
        </h1>
        <p className="text-lg md:text-xl">
          Brochas, rodillos y herramientas profesionales
        </p>
      </div>
    </section>
  );
}
