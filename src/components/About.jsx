import { motion } from "framer-motion";

function About() {
  const cards = [
    {
      title: "Misión",
      text: "Como empresa vanguardista, orientada en todo momento en el logro para que nuestros productos cuenten con la calidad que nuestros clientes más exigentes merecen tener, lograremos el reconocimiento en el mercado nacional e internacional.",
    },
    {
      title: "Visión",
      text: "Ser una empresa reconocida, distinguida, renombrada y demandante, en el mundo de la construcción y en los procesos de terminados de obras, que requieran nuestros productos.",
    },
    {
      title: "Metas",
      text: (
        <>
          <strong>A corto plazo:</strong> Atraer la atención de los más exigentes clientes.<br />
          <strong>A mediano plazo:</strong> Establecernos como empresa vanguardista y responsable.<br />
          <strong>A largo plazo:</strong> Ser reconocidos internacionalmente y generar total confianza.
        </>
      ),
    },
  ];

  return (
    <section className="relative bg-white py-16 px-4 text-blue-900" id="nosotros">
      {/* Logo decorativo */}
      <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
        <img
          src="/logo-goya.png"
          alt="Logo Goya"
          className="w-32 sm:w-40"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center mb-12 pt-16">
          <h2 className="text-3xl md:text-4xl font-bold">Nosotros</h2>
          <p className="mt-2 text-base md:text-lg">Conoce la esencia de GOYA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-xl shadow-lg p-6 text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;

