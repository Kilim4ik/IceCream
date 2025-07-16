import { useContext } from "react";
import Button from "../../components/buttons/button/Buttons";

import Nav from "../nav/Nav";
import styles from "./Header.module.css";
import { ModalContext } from "../../../context/modalContext";
import BurgerMenu from "../../components/burger-menu/BurgerMenu";

export default function Header() {
  const { handleModal } = useContext(ModalContext);
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
          <Nav position="header" />
          <div
            style={{
              display: "flex",
              gap: 32,
            }}
          >
            <Button
              onClick={handleModal}
              arrow={true}
              variant="primary"
              position="header"
            >
              Buy now
            </Button>
            <BurgerMenu />
          </div>
        </div>
      </header>
    </>
  );
}
