import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative bg-white h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <img src="/logo-goya.png" alt="GOYA Logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">Calidad que transforma</h1>
        <p className="mt-4 text-lg text-blue-800">Brochas, rodillos y herramientas profesionales</p>
      </motion.div>
    </section>
  );
}

export default Hero;
