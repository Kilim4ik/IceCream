import Button from "../../components/buttons/button/Buttons";

import Nav from "../nav/Nav";
import styles from "./Header.module.css";

export default function Header({ handleModal }) {
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.content}`}>
          <img
            className={styles.logo}
            src="/icons/logo.svg"
            alt="Logo"
            width={48}
            height={44}
          />
          <Nav />
          <Button
            onClick={handleModal}
            // onClick={() => setIsModalOpen(true)}
            arrow={true}
            variant="primary"
          >
            Buy now
          </Button>
        </div>
      </header>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Buy now</h3>
        <div
          style={{
            display: "flex",
          }}
          className=""
        >
          <FormCard
            colors={{
              card: "#AEC6A5",
              imgBG: "rgba(156, 190, 143, 0.7)",
              imgShadow: "rgba(10, 136, 23, 0.25)",
            }}
            img="./images/products/product1.png"
            title="ice cream"
          />
          <FormCard
            colors={{
              card: "#EFD478",
              imgBG: "rgba(248, 210, 78, 0.7)",
              imgShadow: "rgba(153, 114, 23, 0.25)",
            }}
            img="./images/products/product1.png"
            title="ice coffee"
          />
          <FormCard
            colors={{
              card: "#D6936D",
              imgBG: "rgba(213, 117, 63, 0.7)",
              imgShadow: "rgba(0, 0, 0, 0.25)",
            }}
            img="./images/products/product1.png"
            title="milkshakes"
          />
        </div>
        <Form />
      </Modal> */}
    </>
  );
}
