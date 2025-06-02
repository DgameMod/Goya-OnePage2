import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ParallaxBanner from "./components/ParallaxBanner";
import ProductSlider from "./components/ProductSlider";
import ParallaxBanner2 from "./components/ParallaxBanner2";
import ContactModal from "./components/ContactModal";
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

      {/* Modal flotante de contacto */}
      <ContactModal />

      <Footer />
    </div>
  );
}

export default App;

