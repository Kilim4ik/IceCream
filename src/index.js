import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/modalContext";
import { ProductsProvider } from "./context/productsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ProductsProvider>
  </React.StrictMode>
);
