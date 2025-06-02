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
          <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">¿En qué podemos ayudarte?</h2>
            <p className="text-gray-700 mb-4">Escríbenos por WhatsApp o correo.</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/50250362856"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                WhatsApp
              </a>
              <a
                href="mailto:donaldomerida40@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Correo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
