import axios from "axios";

export const fetchProducts = async () => {
  return axios
    .get(
      "https://front-study-91338-default-rtdb.europe-west1.firebasedatabase.app/products"
    )
    .then((res) => res.json())
    .catch(function (error) {
      console.log(error);
    });
};
