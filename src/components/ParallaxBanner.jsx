import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxBanner() {
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
      {/* Fondo parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/parallax-brochas-banner.png"
          alt="Calidad GOYA"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Capa oscura y contenido */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/40 text-white text-center px-6">
        <div>
          <img
            src="/logo-goya.png"
            alt="Logo Goya"
            className="w-32 md:w-40 mx-auto mb-4 brightness-0 invert"
          />
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Calidad que transforma
          </h2>
          <p className="text-md md:text-lg">
            Brochas, rodillos y herramientas profesionales
          </p>
        </div>
      </div>
    </section>
  );
}

export default ParallaxBanner;

