import { useContext, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import Form from "../form/Form";
import { ModalContext } from "../../../context/modalContext";
import { ProductsContext } from "../../../context/productsContext";

const Modal = ({ product }) => {
  const [purchase, setPurchase] = useState(0);
  const { isModalOpen, isModalShowed, handleClose, handleEscape, showModal } =
    useContext(ModalContext);
  const { products } = useContext(ProductsContext);
  const resetState = () => {
    setPurchase(0);
  };

  const onSubmit = ({ target }) => {
    console.log({
      name: target.name.value.trim(),
      email: target.email?.trim() ? target.email.value.trim() : "",
      phone: target.phone?.value?.trim() ? target.phone.value.trim() : "",
      comment: target.comment?.value?.trim() ? target.comment.value.trim() : "",
      order: target.card ? target.card.value : product.title,
    });
    handleClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    setTimeout(showModal, 200);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape, showModal]);
  useEffect(() => {
    if (!isModalOpen) resetState();
  }, [isModalOpen]);
  return (
    <div
      className={`${styles.backdrop} ${isModalShowed ? styles.isShowen : ""}`}
      onClick={handleClose}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img
          className={styles.closeBtn}
          onClick={handleClose}
          src="/icons/closeBtn.svg"
          alt=""
        />

        {product ? (
          <div className={styles.detailesModal}>
            <h3>Chololate icecream</h3>
            <div className={styles.imgWrapper}>
              <img src={product.image} alt={product.name} />
              <span></span>
            </div>
            <ul className={styles.infoList}>
              {Object.entries(product.info).map(([key, value], index) => (
                <li key={index} className={styles.infoItem}>
                  <p>{value}</p>
                  <span>{key}</span>
                </li>
              ))}
            </ul>
            <h4>Ingredients</h4>
            <ul className={styles.ingredientsList}>
              {Object.entries(product.ingredients).map(
                ([key, value], index) => (
                  <li key={index} className={styles.ingredientsItem}>
                    <p>{key}</p>
                    <span>{value}</span>
                  </li>
                )
              )}
            </ul>
            <Form onSubmit={onSubmit} />
          </div>
        ) : (
          <div className={styles.buyNow}>
            <h3>Buy now</h3>

            <Form onSubmit={onSubmit}>
              <div className={styles.cardsList}>
                {products.map(({ id, title, image }) => (
                  <label
                    className={`${styles.card} ${
                      purchase === id ? styles.choosen : ""
                    }`}
                    key={id}
                  >
                    <input
                      type="radio"
                      name="card"
                      value={id}
                      style={{
                        display: "none",
                      }}
                      onChange={() => setPurchase(id)}
                    />
                    <div className="card">
                      <div className={styles.imgWrapper}>
                        <span></span>
                        <img src={image} alt={title} />
                      </div>
                      <h4>{title}</h4>
                    </div>
                  </label>
                ))}
              </div>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
