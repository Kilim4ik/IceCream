import Button from "../../components/buttons/button/Buttons";
import Nav from "../nav/Nav";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.content}`}>
        <img
          className={styles.logo}
          src="./icons/logo.svg"
          alt="Logo"
          width={48}
          height={44}
        />
        <Nav />
        <Button arrow={true} variant="primary">
          Buy now
        </Button>
      </div>
    </header>
  );
}
