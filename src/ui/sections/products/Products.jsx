import { useEffect, useState } from "react";
import Title from "../../components/title/Title";
import Product from "./Product";
import styles from "./Products.module.css";
export default function Products({ selectProduct, handleModal, data }) {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://front-study-91338-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      );
      const data = await response.json();
      setProducts(() => data);
    } catch (err) {
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container ${styles.productsSectionContainer}`}>
        <Title subTitle="100% natural" title="products" />
        {isLoading && <p className={styles.loading}>Loading...</p>}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <div className={styles.productsContainer}>
          {products.map(
            ({ id, title, description, image, colors, ...rest }) => (
              <Product
                selectProduct={() => {
                  selectProduct({
                    id,
                    title,
                    description,
                    image,
                    colors,
                    ...rest,
                  });
                }}
                key={id}
                handleModal={handleModal}
                title={title}
                description={description}
                image={image}
                colors={colors}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
