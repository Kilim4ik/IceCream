import Title from "../../components/title/Title";
import Product from "./Product";
import styles from "./Products.module.css";
export default function Products({ products }) {
  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container ${styles.productsSectionContainer}`}>
        <Title subTitle="100% natural" title="products" />

        <div className={styles.productsContainer}>
          <Product
            colors={{
              card: "#AEC6A5",
              imgBG: "rgba(156, 190, 143, 0.7)",
              imgShadow: "rgba(10, 136, 23, 0.25)",
            }}
            urls={{
              photo: "./images/products/product1.png",
              link: "#",
            }}
            title="ice cream"
            text="Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer"
          />
          <Product
            colors={{
              card: "#EFD478",
              imgBG: "rgba(248, 210, 78, 0.7)",
              imgShadow: "rgba(153, 114, 23, 0.25)",
            }}
            urls={{
              photo: "./images/products/product2.png",
              link: "#",
            }}
            title="ice coffee"
            text="Fragrant invigorating drink created from 100% natural ingredients without the use of preservatives and flavor enhancers

            "
          />
          <Product
            colors={{
              card: "#D6936D",
              imgBG: "rgba(213, 117, 63, 0.7)",
              imgShadow: "rgba(0, 0, 0, 0.25)",
            }}
            urls={{
              photo: "./images/products/product3.png",
              link: "#",
            }}
            title="milkshakes"
            text="Sweet drinks based on milk and ice cream, supplemented with syrups, fruits, berries and other sweets of your choice
            "
          />
        </div>
      </div>
    </section>
  );
}
