function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h4 className="text-lg font-semibold mb-2">GOYA</h4>
          <p>La aplicación perfecta para cada proyecto.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Contacto</h4>
          <p>📞 <a href="https://wa.me/50250362856" className="underline">WhatsApp</a></p>
          <p>📧 <a href="mailto:donaldomerida40@gmail.com" className="underline">Correo</a></p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" target="_blank" className="hover:underline">Facebook</a>
            <a href="#" target="_blank" className="hover:underline">Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-blue-800 pt-4">
        © {new Date().getFullYear()} GOYA. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
