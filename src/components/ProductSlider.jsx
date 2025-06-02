
import React from "react";

const products = [
  {
    name: "Brocha GOYA Profesional",
    image: "/slider1.png",
  },
  {
    name: "Rodillo Antigota POLIMAX",
    image: "/slider2.png",
  },
  {
    name: "Espátula drywall",
    image: "/slider3.png",
  },
  {
    name: "Guantes industriales",
    image: "/slider4.png",
  },
];

export default function ProductSlider() {
  return (
    <section className="py-16 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Nuestros productos estrella
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mx-auto bg-white"
              />
              <div className="p-4 text-center">
                <h3 className="text-md font-semibold text-blue-800">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
