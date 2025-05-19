import "./App.css";
import "./index.css";
import Modal from "./ui/components/modal/Modal.jsx";
import Header from "./ui/sections/header/Header.jsx";
import Hero from "./ui/sections/hero/Hero.jsx";
import HowItIsMade from "./ui/sections/how-it-is-made/HowItIsMade.jsx";
import Products from "./ui/sections/products/Products.jsx";
import products from "./data/products.json";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Header handleModal={handleModal} />
      <Hero />
      <Products handleModal={handleModal} />
      <HowItIsMade />
      {isModalOpen ===  true && (
        <Modal handleModal={handleModal} data={products} />
      )}
    </div>
  );
}

export default App;
