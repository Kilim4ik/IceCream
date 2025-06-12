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
  const [choosenProduct, setChoosenProduct] = useState(null);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const selectProduct = (elem) => {
    setChoosenProduct(elem);
  };
  const resetSelectedProduct = () => {
    setChoosenProduct(null);
  };
  return (
    <div className="App">
      <Header handleModal={handleModal} />
      <Hero />
      <Products
        selectProduct={selectProduct}
        handleModal={handleModal}
        data={products}
      />
      <HowItIsMade />
      {isModalOpen === true && (
        <Modal
          resetSelectedProduct={resetSelectedProduct}
          handleModal={handleModal}
          data={products}
          product={choosenProduct}
        />
      )}
    </div>
  );
}

export default App;
