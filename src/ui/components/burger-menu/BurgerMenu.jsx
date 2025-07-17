import { useContext } from "react";
import styles from "./burger-menu.module.css";
import { ModalContext } from "../../../context/modalContext";
export default function BurgerMenu() {
  const { isBurgerShowed, handleBurger } = useContext(ModalContext);

  return (
    <button
      style={{
        background: "none",
        border: "none",
      }}
      onClick={handleBurger}
      className={styles.button}
    >
      <span
        className={`${styles.BurgerMenuLine} ${
          isBurgerShowed ? styles.animation : ""
        }`}
      ></span>
    </button>
  );
}
