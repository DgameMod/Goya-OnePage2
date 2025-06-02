import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="bg-white pt-0 pb-16 px-4"> id="contacto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Contáctanos</h2>
          <p className="mt-2 text-base md:text-lg">
            ¿Tienes dudas o deseas cotizar? Escríbenos.
          </p>
        </div>

        <form
          className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Nombre"
            className="border rounded-lg p-3 w-full"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border rounded-lg p-3 w-full"
            required
          />
          <textarea
            rows="4"
            placeholder="Mensaje"
            className="border rounded-lg p-3 w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white py-3 px-6 rounded-full hover:bg-blue-900 transition font-semibold"
          >
            Enviar mensaje
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
