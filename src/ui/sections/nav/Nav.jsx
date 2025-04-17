import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a href="/home">Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="#how-it’s-made">How it’s made?</a>
        </li>
        <li className={styles.navItem}>
          <a href="#products">Our products</a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
