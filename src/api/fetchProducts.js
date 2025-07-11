import axios from "axios";

export const fetchProducts = () => {
  return axios.get(
    "https://front-study-91338-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  );
};
