import React from "react";

const productos = [
  {
    nombre: "Brocha GOYA Profesional",
    imagen: "/slider1.png",
  },
  {
    nombre: "Rodillo Antigota POLIMAX",
    imagen: "/slider2.png",
  },
  {
    nombre: "Espátula drywall",
    imagen: "slider3.png",
  },
  {
    nombre: "Guantes industriales",
    imagen: "/slider4.png",
  },
];

export default function ProductSlider() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">Nuestros productos estrella</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg overflow-hidden"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800">{producto.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
