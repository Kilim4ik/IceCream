import { Component } from "react";
import styles from "./Modal.module.css";
import Form from "../form/Form";

class Modal extends Component {
  static defaultProps = {
    isDetailsModal: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      phone: null,
      comment: null,
      purchase: 0,
      modalShowed: false,
      isFormSubmited: false,
    };
  }
  handleClose = () => {
    this.setState({ modalShowed: false });
    setTimeout(() => {
      this.props.handleModal();
      this.resetState();
      this.props.resetSelectedProduct();
    }, 300);
  };
  resetState = () => {
    this.setState({
      name: null,
      phone: null,
      comment: null,
      purchase: 1,
      modalShowed: false,
      isFormSubmited: false,
    });
  };
  onChange = (name, value) => {
    this.setState({ [name]: value });
  };
  onSubmit = ({ target }) => {
    console.log({
      name: target.name.value,
      email: target.email ? target.email.value : "",
      phone: target.phone.value,
      comment: target.comment.value,
      card: target.card,
    });
    this.setState({ isFormSubmited: true });
  };
  showModal = () => {
    this.setState({ modalShowed: true });
  };
  handleEscape = (e) => {
    if (e.key === "Escape") this.handleClose();
  };
  componentDidMount() {
    this.props.handleModal();
    document.addEventListener("keydown", this.handleEscape);
    setTimeout(this.showModal, 200);
  }
  componentDidUpdate(_, prevState) {
    console.log("prevState", prevState);
    if (!prevState.isFormSubmited && this.state.isFormSubmited) {
      this.setState({ isFormSubmited: true });
    }
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscape);
  }
  render() {
    const { modalShowed } = this.state;
    const { data, product } = this.props;

    return (
      <div
        className={`${styles.backdrop} ${modalShowed ? styles.isShowen : ""}`}
        onClick={this.handleClose}
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <img
            className={styles.closeBtn}
            onClick={this.handleClose}
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
              <Form></Form>
            </div>
          ) : (
            <div className={styles.buyNow}>
              <h3>Buy now</h3>

              <Form onSubmit={this.onSubmit} onChange={this.onChange}>
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
              </Form>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Modal;
