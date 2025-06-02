import { useState } from "react";
import { MessageCircle } from "lucide-react"; // Asegúrate de tener lucide-react instalado

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
        aria-label="Abrir chat de contacto"
      >
        <MessageCircle size={20} />
        Chat
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">¿En qué podemos ayudarte?</h2>
            <p className="text-sm text-gray-600">
              Puedes escribirnos por WhatsApp o completar el formulario de contacto.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
