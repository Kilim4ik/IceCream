import Title from "../../components/title/Title";
import Product from "./Product";
import styles from "./Products.module.css";
export default function Products({ selectProduct, handleModal, data }) {
  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container ${styles.productsSectionContainer}`}>
        <Title subTitle="100% natural" title="products" />

        <div className={styles.productsContainer}>
          {data.map(({ id, title, description, image, colors, ...rest }) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
