import { motion } from "framer-motion";

const imagenes = [
  "/galeria1.png",
  "/galeria2.png",
  "/galeria3.png",
  "/galeria4.png",
  "/galeria5.png",
  "/galeria6.png",
];

function Gallery() {
  return (
    <section className="bg-white py-16 px-4 text-blue-900" id="galeria">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Galería</h2>
        <p className="mt-2 text-base md:text-lg">Conoce nuestros productos más vendidos</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {imagenes.map((src, index) => (
         <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Galería ${index + 1}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
