// Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-fondo1.jpg')" }}
    >
      {/* Logo arriba a la izquierda */}
      <div className="absolute top-6 left-6">
        <img
          src="/logo-goya.png" // Asegúrate de tener esta imagen en /public/logo-goya.png
          alt="Logo Goya"
          className="w-28 md:w-36"
        />
      </div>

      {/* Contenido centrado */}
      <div className="bg-black/50 p-8 rounded-xl text-center max-w-2xl">
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
