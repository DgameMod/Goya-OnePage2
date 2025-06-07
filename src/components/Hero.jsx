export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-white text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-fondo.png')" }}
    >
      {/* Capa oscura superpuesta */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Calidad que transforma</h1>
        <p className="text-lg md:text-2xl mb-6">
          Brochas, rodillos y herramientas para profesionales
        </p>
        <a
          href="#cotiza"
          className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Cotiza tu proyecto
        </a>
      </div>
    </section>
  );
}
