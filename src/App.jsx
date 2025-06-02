import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ParallaxBanner from "./components/ParallaxBanner";
import ProductSlider from "./components/ProductSlider";
import ParallaxBanner2 from "./components/ParallaxBanner2";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Hero />
      <About />
      <Gallery />
      <ParallaxBanner />
      <ProductSlider />
      <ParallaxBanner2 />

      {/* Sección de contacto */}
      <section id="contacto" className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contáctanos</h2>
          <p className="text-gray-600 mb-6">
            ¿Deseas una cotización o más información? Escríbenos con gusto te ayudamos.
          </p>

          {/* Botón directo a WhatsApp */}
          <a
            href="https://wa.me/50250362856"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-800 transition duration-300"
          >
            Escribir por WhatsApp
          </a>

          <div className="my-8 border-t border-gray-300"></div>

          {/* Formulario con alerta */}
          <form
            action="https://formsubmit.co/donaldomerida40@gmail.com"
            method="POST"
            onSubmit={() =>
              alert("¡Gracias por tu mensaje! Te responderemos pronto.")
            }
            className="space-y-4 text-left"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Gracias por contactarnos. Te responderemos pronto."
            />

            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="Nombre"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="Correo"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="Mensaje"
                rows="4"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;

