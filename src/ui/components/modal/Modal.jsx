import { Component, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import Form from "../form/Form";

// class Modal extends Component {
//   static defaultProps = {
//     isDetailsModal: false,
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: null,
//       phone: null,
//       comment: null,
//       purchase: 0,
//       modalShowed: false,
//       isFormSubmited: false,
//     };
//   }
//   handleClose = () => {
//     this.setState({ modalShowed: false });
//     setTimeout(() => {
//       this.resetState();
//       this.props.resetSelectedProduct();
//       this.props.setIsModalOpen(false);
//     }, 300);
//   };
//   resetState = () => {
//     this.setState({
//       name: null,
//       phone: null,
//       comment: null,
//       purchase: 1,
//       modalShowed: false,
//       isFormSubmited: false,
//     });
//   };
//   onChange = (name, value) => {
//     this.setState({ [name]: value });
//   };
//   onSubmit = ({ target }) => {
//     console.log({
//       name: target.name.value,
//       email: target.email ? target.email.value : "",
//       phone: target.phone.value,
//       comment: target.comment.value,
//       card: target.card,
//     });
//     this.setState({ isFormSubmited: true });
//   };
//   showModal = () => {
//     this.props.setIsModalOpen(true);
//     this.setState({ modalShowed: true });
//   };
//   handleEscape = (e) => {
//     if (e.key === "Escape") this.handleClose();
//   };
//   componentDidMount() {
//     document.addEventListener("keydown", this.handleEscape);
//     setTimeout(this.showModal, 200);
//   }
//   componentDidUpdate(_, prevState) {
//     console.log("prevState", prevState);
//     if (!prevState.isFormSubmited && this.state.isFormSubmited) {
//       this.setState({ isFormSubmited: true });
//     }
//   }
//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handleEscape);
//   }
//   render() {
//     const { modalShowed } = this.state;
//     const { data, product } = this.props;

//     return (
//       <div
//         className={`${styles.backdrop} ${modalShowed ? styles.isShowen : ""}`}
//         onClick={this.handleClose}
//       >
//         <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//           <img
//             className={styles.closeBtn}
//             onClick={this.handleClose}
//             src="/icons/closeBtn.svg"
//             alt=""
//           />

//           {product ? (
//             <div className={styles.detailesModal}>
//               <h3>Chololate icecream</h3>
//               <div className={styles.imgWrapper}>
//                 <img src={product.image} alt={product.name} />
//                 <span></span>
//               </div>
//               <ul className={styles.infoList}>
//                 {Object.entries(product.info).map(([key, value], index) => (
//                   <li key={index} className={styles.infoItem}>
//                     <p>{value}</p>
//                     <span>{key}</span>
//                   </li>
//                 ))}
//               </ul>
//               <h4>Ingredients</h4>
//               <ul className={styles.ingredientsList}>
//                 {Object.entries(product.ingredients).map(
//                   ([key, value], index) => (
//                     <li key={index} className={styles.ingredientsItem}>
//                       <p>{key}</p>
//                       <span>{value}</span>
//                     </li>
//                   )
//                 )}
//               </ul>
//               <Form></Form>
//             </div>
//           ) : (
//             <div className={styles.buyNow}>
//               <h3>Buy now</h3>

//               <Form onSubmit={this.onSubmit} onChange={this.onChange}>
//                 <div className={styles.cardsList}>
//                   {data.map(({ id, title, image }) => (
//                     <label
//                       className={`${styles.card} ${
//                         this.state.purchase === id ? styles.choosen : ""
//                       }`}
//                       key={id}
//                     >
//                       <input
//                         type="radio"
//                         name="card"
//                         value={id}
//                         style={{
//                           display: "none",
//                         }}
//                         onChange={() => this.setState({ purchase: id })}
//                       />
//                       <div className="card">
//                         <div className={styles.imgWrapper}>
//                           <span></span>
//                           <img src={image} alt={title} />
//                         </div>
//                         <h4>{title}</h4>
//                       </div>
//                     </label>
//                   ))}
//                 </div>
//               </Form>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }
// export default Modal;

const Modal = ({
  isDetailsModal = false,
  resetSelectedProduct,
  handleModal,
  data,
  product,
}) => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [comment, setComment] = useState(null);
  const [purchase, setPurchase] = useState(0);
  const [isModalShowed, setIsModalShowed] = useState(false);

  const handleClose = () => {
    setIsModalShowed(false);
    setTimeout(() => {
      resetState();
      resetSelectedProduct();
      handleModal();
    }, 300);
  };
  const resetState = () => {
    setPurchase(0);
    setIsModalShowed(false);
  };
  const onChange = (name, value) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "comment":
        setComment(value);
        break;
      default:
        console.log("error switch");
        break;
    }
  };
  const onSubmit = ({ target }) => {
    console.log({
      name: target.name.value.trim(),
      email: target.email?.trim() ? target.email.value.trim() : "",
      phone: target.phone.value.trim(),
      comment: target.comment.value.trim(),
      card: target.card ? target.card : product.title,
    });
    handleClose();
  };
  const showModal = () => {
    setIsModalShowed(true);
  };
  const handleEscape = (e) => {
    if (e.key === "Escape") handleClose();
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    setTimeout(showModal, 200);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
            <Form onChange={onChange} onSubmit={onSubmit} />
          </div>
        ) : (
          <div className={styles.buyNow}>
            <h3>Buy now</h3>

            <Form onSubmit={onSubmit} onChange={onChange}>
              <div className={styles.cardsList}>
                {data.map(({ id, title, image }) => (
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
