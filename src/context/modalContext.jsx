import { createContext, useState, useCallback } from "react";

export const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [isModalShowed, setIsModalShowed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerShowed, setIsBurgerShowed] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const showModal = () => {
    setIsModalShowed(true);
  };
  const handleClose = () => {
    setIsModalShowed(false);
    setTimeout(() => {
      handleModal();
    }, 250);
  };
  const handleEscape = (e) => {
    if (e.key === "Escape") handleClose();
  };
  const handleBurger = () => {
    if (isBurgerOpen) closeBurger();
    else setIsBurgerOpen(true);
  };
  const showBurger = useCallback(() => {
    setIsBurgerShowed(true);
  }, []);
  const closeBurger = () => {
    setIsBurgerShowed(false);
    setTimeout(() => {
      setIsBurgerOpen(false);
    }, 700);
  };
  return (
    <ModalContext.Provider
      value={{
        isModalShowed,
        isModalOpen,
        isBurgerShowed,
        isBurgerOpen,
        handleBurger,
        showBurger,
        handleModal,
        showModal,

        handleClose,
        handleEscape,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
