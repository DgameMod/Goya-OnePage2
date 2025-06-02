
import React from "react";

const products = [
  {
    title: "Brocha GOYA Profesional",
    image: "/slider1.png",
  },
  {
    title: "Rodillo Antigota POLIMAX",
    image: "/slider2.png",
  },
  {
    title: "Espátula drywall",
    image: "/slider3.png",
  },
  {
    title: "Guantes industriales",
    image: "/slider4.png",
  },
];

export default function ProductSlider() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
          Nuestros productos estrella
        </h2>
        <p className="text-gray-500 mb-10">
          Herramientas destacadas por su calidad y desempeño
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain max-h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-blue-900 font-semibold text-md">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
