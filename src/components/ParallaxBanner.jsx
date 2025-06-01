// ParallaxBanner.jsx
import React from "react";

export default function ParallaxBanner() {
  return (
    <section id="cotiza">
      <div
        className="relative h-[400px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/parallax-brochas-banner.jpg')" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Hecho para profesionales</h2>
        <p className="text-lg md:text-xl mb-6">GOYA, tu herramienta de confianza</p>
        <a
          href="#contacto"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Cotiza ahora
        </a>
      </div>
    </section>
  );
}
