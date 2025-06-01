import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-white text-center py-20 px-4" id="hero">
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ scale: [1, 1.05, 1] }}
      viewport={{ once: true }}
    >
        <img
          src="/logo-goya.png"
          alt="Logo Goya"
          className="w-48 md:w-64 mx-auto mb-6"
        />

        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          La aplicación perfecta.
        </h1>

        <a
          href="#productos"
          className="inline-block mt-4 bg-blue-800 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-blue-900 transition"
        >
          Explorar Catálogo
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
