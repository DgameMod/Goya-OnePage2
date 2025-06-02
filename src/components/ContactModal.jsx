import { useState } from "react";
import { X } from "lucide-react"; // Asegúrate de tener instalada la librería lucide-react

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón flotante de contacto */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full shadow-lg z-50 transition"
      >
        Chat
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full relative">
            {/* Botón de cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            {/* Contenido del modal */}
            <h2 className="text-xl font-bold mb-2 text-blue-800">¿En qué podemos ayudarte?</h2>
            <p className="text-gray-600 mb-4">
              ¿Deseas una cotización o más información? Escríbenos directamente por WhatsApp.
            </p>

            <a
              href="https://wa.me/50250362856"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Ir a WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
