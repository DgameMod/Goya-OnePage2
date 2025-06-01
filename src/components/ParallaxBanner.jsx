import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxBanner2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] overflow-hidden my-16 bg-white"
    >
      {/* Fondo con parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/parallax-brochas-banner.jpg"
          alt="Brochas GOYA fondo"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/40 text-white text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          Hecho para profesionales
        </h2>
        <p className="text-md md:text-lg">GOYA, tu herramienta de confianza</p>

        {/* Botón CTA */}
        <a
          href="#contacto"
          className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded-full font-semibold shadow-lg hover:bg-white hover:text-blue-800 transition-colors duration-300"
        >
          Cotiza ahora
        </a>
      </div>
    </section>
  );
}

export default ParallaxBanner2;
