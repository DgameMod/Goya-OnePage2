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
    <section ref={ref} className="relative h-[60vh] overflow-hidden">
      {/* Imagen de fondo con efecto parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/parallax-brochas-banner.png"
          alt="Fondo brochas GOYA"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Capa oscura + contenido centrado */}
      <div className="absolute inset-0 z-10 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          Hecho para profesionales
        </h2>
        <p className="text-md md:text-lg">
          GOYA, tu herramienta de confianza
        </p>
      </div>
    </section>
  );
}

export default ParallaxBanner2;
