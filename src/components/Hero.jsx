// Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-start"
      style={{ backgroundImage: "url('/hero-fondo1.jpg')" }}
    >
      {/* Contenedor de texto con fondo semitransparente */}
      <div className="ml-6 md:ml-24 bg-black/30 p-10 rounded-xl max-w-xl text-white z-10">
        {/* Logo más abajo (más cerca del texto) */}
        <img
          src="/logo-goya-blanco.png"
          alt="Logo Goya"
          className="w-32 md:w-36 mb-1"
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

