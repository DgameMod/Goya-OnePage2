import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden my-16 rounded-xl shadow-lg">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/parallax-bg.png"
          alt="Calidad GOYA"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center h-full bg-black/40 text-white text-center px-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Calidad GOYA</h2>
          <p className="text-lg md:text-xl">Productos hechos para durar y destacar</p>
        </div>
      </div>
    </section>
  );
}

export default ParallaxBanner;
