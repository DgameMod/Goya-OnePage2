import './index.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Products />
    </div>
  );
}

export default App;
