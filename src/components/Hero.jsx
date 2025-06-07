// Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-start"
      style={{ backgroundImage: "url('/hero-fondo1.jpg')" }}
    >
      {/* Contenedor de fondo oscuro y contenido */}
      <div className="relative ml-6 md:ml-24 bg-black/30 p-10 pt-16 rounded-xl max-w-xl text-white">
        {/* Logo blanco dentro del contenedor, encima del fondo */}
        <img
          src="/logo-goya-blanco.png"
          alt="Logo Goya"
          className="absolute top-4 left-4 w-24 md:w-28"
        />

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
