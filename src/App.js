import "./App.css";
import "./index.css";
import Header from "./ui/sections/header/Header.jsx";
import Hero from "./ui/sections/hero/Hero.jsx";
import Products from "./ui/sections/products/Products.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
