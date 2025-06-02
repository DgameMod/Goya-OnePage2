import { useState } from "react";

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        Contactar
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-md p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-2">Contáctanos</h2>
            <form
              action="https://formsubmit.co/donaldomerida40@gmail.com"
              method="POST"
              onSubmit={() =>
                alert("¡Gracias por tu mensaje! Te responderemos pronto.")
              }
              className="space-y-3"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Gracias por contactarnos. Te responderemos pronto."
              />
              <input
                type="text"
                name="Nombre"
                placeholder="Nombre"
                required
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                type="email"
                name="Correo"
                placeholder="Correo electrónico"
                required
                className="w-full border px-4 py-2 rounded-md"
              />
              <textarea
                name="Mensaje"
                rows="4"
                placeholder="Mensaje"
                required
                className="w-full border px-4 py-2 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
