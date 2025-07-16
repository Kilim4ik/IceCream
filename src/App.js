import "./App.css";
import "./index.css";
import Modal from "./ui/components/modal/Modal.jsx";
import Header from "./ui/sections/header/Header.jsx";
import Hero from "./ui/sections/hero/Hero.jsx";
import HowItIsMade from "./ui/sections/how-it-is-made/HowItIsMade.jsx";
import Products from "./ui/sections/products/Products.jsx";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./context/modalContext.jsx";
import BurgerMenuWindow from "./ui/components/burger-menu/BurgerMenuWindow.jsx";

function App() {
  const [choosenProduct, setChoosenProduct] = useState(null);
  const { isModalOpen, isBurgerOpen } = useContext(ModalContext);

  const selectProduct = (elem) => {
    setChoosenProduct(elem);
  };
  const resetSelectedProduct = () => {
    setChoosenProduct(null);
  };

  useEffect(() => {
    if (!isModalOpen) resetSelectedProduct();
  }, [isModalOpen]);
  return (
    <div className="App">
      {isBurgerOpen && <BurgerMenuWindow />}
      <Header />
      <Hero />
      <Products selectProduct={selectProduct} />
      <HowItIsMade />
      {isModalOpen === true && (
        <Modal
          resetSelectedProduct={resetSelectedProduct}
          product={choosenProduct}
        />
      )}
    </div>
  );
}

export default App;
