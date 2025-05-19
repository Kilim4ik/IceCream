import { Component } from "react";
import styles from "./Modal.module.css";
import Form from "../form/Form";

class Modal extends Component {
  defaultProps = {
    isDetailsModal: false,
  };
  state = {
    name: null,
    email: null,
    comment: null,
    purchase: 1,
  };
  resetState = () => {
    this.setState({
      name: null,
      email: null,
      comment: null,
      purchase: 1,
    });
  };
  render() {
    const { handleModal, isDetailsModal, data } = this.props;

    return (
      <div
        className={styles.backdrop}
        onClick={() => {
          handleModal();
          this.resetState();
        }}
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <img
            className={styles.closeBtn}
            onClick={() => {
              handleModal();
              this.resetState();
            }}
            src="./icons/closeBtn.svg"
            alt=""
          />

          {isDetailsModal ? (
            <div className={styles.detailesModal}></div>
          ) : (
            <div className={styles.buyNow}>
              <h3>Buy now</h3>
              <div className={styles.cardsList}>
                {data.map(({ id, title, image }) => (
                  <label
                    className={`${styles.card} ${
                      this.state.purchase === id ? styles.choosen : ""
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
                      onChange={() => this.setState({ purchase: id })}
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
              <Form />
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Modal;
