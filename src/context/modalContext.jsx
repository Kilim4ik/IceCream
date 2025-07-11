import { createContext, useState } from "react";

export const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [isModalShowed, setIsModalShowed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const showModal = () => {
    setIsModalShowed(true);
  };
  const fideModal = () => {
    setIsModalShowed(false);
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

  return (
    <ModalContext.Provider
      value={{
        isModalShowed,
        isModalOpen,
        handleModal,
        showModal,
        fideModal,
        handleClose,
        handleEscape,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
