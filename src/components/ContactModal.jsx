// src/components/ContactModal.jsx
import { useState } from "react";

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón flotante de chat */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
        aria-label="Abrir chat de contacto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.9L3 21l1.9-5A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        Chat
      </button>

      {/* Modal de contacto */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Contáctanos</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-red-600 text-lg font-bold"
                aria-label="Cerrar modal"
              >
                ×
              </button>
            </div>
            <form
              action="https://formsubmit.co/donaldomerida40@gmail.com"
              method="POST"
              onSubmit={() => alert("¡Gracias por tu mensaje! Te responderemos pronto.")}
              className="space-y-4"
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
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="email"
                name="Correo"
                required
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 border rounded-md"
              />
              <textarea
                name="Mensaje"
                rows="4"
                required
                placeholder="Escribe tu mensaje..."
                className="w-full px-4 py-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
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
