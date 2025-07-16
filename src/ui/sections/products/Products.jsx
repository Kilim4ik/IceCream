import { useContext, useEffect } from "react";
import Title from "../../components/title/Title";
import Product from "./Product";
import styles from "./Products.module.css";
import { ProductsContext } from "../../../context/productsContext";
export default function Products({ selectProduct }) {
  const { products, fetchData, isLoading, errorMessage } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container `}>
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
