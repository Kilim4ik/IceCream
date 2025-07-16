import { useContext, useEffect } from "react";
import Nav from "../../sections/nav/Nav";
import styles from "./burger-menu.module.css";
import { ModalContext } from "../../../context/modalContext";
import Button from "../buttons/button/Buttons";
export default function BurgerMenuWindow() {
  const { handleModal, isBurgerShowed, handleBurger, showBurger } =
    useContext(ModalContext);
  const onClick = () => {
    handleBurger();
    handleModal();
  };
  useEffect(() => {
    showBurger();
  }, [showBurger]);
  return (
    <div className={styles.BurgerMenuWindowContainer}>
      <div
        className={`${styles.Backdrop} ${
          isBurgerShowed ? styles.ModalAnimation : ""
        }`}
      ></div>

      <Nav position="burger-menu" onClick={handleBurger} />
      <Button onClick={onClick} arrow={true} variant="primary">
        Buy now
      </Button>
    </div>
  );
}
