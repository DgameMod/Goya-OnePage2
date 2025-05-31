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
    </div>
  );
}

export default App;
