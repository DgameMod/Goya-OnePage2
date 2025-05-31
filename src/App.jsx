import './index.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Products />
      <Contact />

      <a
  href="https://wa.me/50250362856"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 z-50"
>
  💬
</a>

    </div>
  );
}

export default App;
