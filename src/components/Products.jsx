import { motion } from "framer-motion";

function Products() {
  const productos = [
    {
      nombre: "Brochas GOYA",
      descripcion:
        "Diseñadas con filamentos suaves, ergonómicas y resistentes. Ideales para acabados finos y duraderos.",
      imagen: "/brochas.jpg",
    },
    {
      nombre: "Rodillos Antigota",
      descripcion:
        "Sistema antigoteo, con hilo hidrofílico, mango ergonómico y extremos biselados para mejor aplicación.",
      imagen: "/rodillo.png",
    },
    {
      nombre: "Espátulas Profesionales",
      descripcion:
        "Fabricadas en acero alemán, con mango antideslizante. Alta precisión y durabilidad.",
      imagen: "/espatula.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 text-blue-900" id="productos">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Nuestros Productos</h2>
        <p className="mt-2 text-base md:text-lg">
          Calidad profesional para cada aplicación
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productos.map((producto, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
           <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full max-h-72 object-contain mx-auto"
          />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
              <p className="text-sm">{producto.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/catalogo-goya.pdf"
          target="_blank"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-blue-900 transition"
        >
          Ver Catálogo Completo
        </a>
      </div>
    </section>
  );
}

export default Products;

