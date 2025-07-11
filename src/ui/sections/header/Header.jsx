import { useContext } from "react";
import Button from "../../components/buttons/button/Buttons";

import Nav from "../nav/Nav";
import styles from "./Header.module.css";
import { ModalContext } from "../../../context/modalContext";

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
          <Nav />
          <Button onClick={handleModal} arrow={true} variant="primary">
            Buy now
          </Button>
        </div>
      </header>
    </>
  );
}
