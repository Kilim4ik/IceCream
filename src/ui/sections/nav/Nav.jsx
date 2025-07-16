import { useContext } from "react";
import styles from "./Nav.module.css";
import { ModalContext } from "../../../context/modalContext";

export default function Nav({ position, onClick = undefined }) {
  const { isBurgerShowed } = useContext(ModalContext);
  return (
    <nav className={`${styles[`nav-${position}`]}`}>
      <ul
        className={[
          styles.nav,
          position === "burger-menu" && isBurgerShowed
            ? styles.NavAnimation
            : "",
        ].join(" ")}
      >
        <li className={styles.navItem}>
          <a onClick={onClick} href="/home">
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a onClick={onClick} href="#how-it’s-made">
            How it’s made?
          </a>
        </li>
        <li className={styles.navItem}>
          <a onClick={onClick} href="#products">
            Our products
          </a>
        </li>
        <li className={styles.navItem}>
          <a onClick={onClick} href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
