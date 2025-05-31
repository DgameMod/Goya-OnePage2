import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imagenes = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
];

function ProductSlider() {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <section className="bg-white py-16 px-4 text-blue-900" id="slider">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">En acción</h2>
        <p className="mt-2 text-base md:text-lg">Productos GOYA en uso real</p>
      </div>

      <div className="relative max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={imagenes[index]}
            alt={`slider ${index + 1}`}
            className="w-full h-64 object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        <button
          onClick={anterior}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900"
        >
          ◀
        </button>
        <button
          onClick={siguiente}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900"
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default ProductSlider;
