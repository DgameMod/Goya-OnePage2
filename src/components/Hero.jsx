// Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-start"
      style={{ backgroundImage: "url('/hero-fondo1.jpg')" }}
    >
      {/* Logo en la esquina superior izquierda */}
      <img
        src="/logo-goya-blanco.png"
        alt="Logo Goya"
        className="absolute top-6 left-6 w-32 md:w-36 z-20"
      />

      {/* Contenedor de texto con fondo transparente */}
      <div className="ml-6 md:ml-24 bg-black/30 p-10 rounded-xl max-w-xl text-white z-10">
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
