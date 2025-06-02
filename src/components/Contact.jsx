<section id="contacto" className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Contáctanos</h2>
    <p className="text-gray-700 mb-8 text-lg">
      ¿Deseas una cotización o más información? Escríbenos con gusto te ayudamos.
    </p>

    {/* Botón de WhatsApp */}
    <a
      href="https://wa.me/50250362856"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 mb-8"
    >
      📲 Escribir por WhatsApp
    </a>

    <div className="my-6 border-t border-gray-300 w-3/4 mx-auto"></div>

    {/* Formulario */}
    <form
      action="https://formsubmit.co/donaldomerida40@gmail.com"
      method="POST"
      onSubmit={() => alert("¡Gracias por tu mensaje! Te responderemos pronto.")}
      className="space-y-5 text-left"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_autoresponse" value="Gracias por contactarnos. Te responderemos pronto." />

      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-blue-800">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="Nombre"
          required
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div>
        <label htmlFor="correo" className="block text-sm font-medium text-blue-800">
          Correo electrónico
        </label>
        <input
          type="email"
          id="correo"
          name="Correo"
          required
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-blue-800">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="Mensaje"
          rows="4"
          required
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition shadow-md"
      >
        Enviar mensaje
      </button>
    </form>
  </div>
</section>
