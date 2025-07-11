import { createContext, useCallback, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchProducts();
      setProducts(data.data);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, fetchData, isLoading, errorMessage }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
