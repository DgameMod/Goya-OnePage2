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
  className="relative overflow-hidden bg-white mb-0"
  style={{ height: "auto" }}
>
  {/* Fondo parallax */}
  <motion.div style={{ y }} className="absolute inset-0 z-0">
    <img
      src="/parallax-brochas-banner.png"
      alt="Fondo brochas GOYA"
      className="w-full object-cover"
      style={{ minHeight: "500px" }}
    />
  </motion.div>

  {/* Contenido + capa oscura */}
  <div className="relative z-10 flex items-center justify-center min-h-[500px] bg-black/40 text-white text-center px-6">
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-2">
        Hecho para profesionales
      </h2>
      <p className="text-md md:text-lg">
        GOYA, tu herramienta de confianza
      </p>
    </div>
  </div>
</section>
  );
}

export default ParallaxBanner2;

