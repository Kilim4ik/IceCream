import { Component } from "react";
import Button from "../buttons/button/Buttons";
import styles from "./Form.module.css";

class Form extends Component {
  static defaultProps = {
    name: true,
    phone: true,
    email: false,
    comment: true,
  };
  render() {
    const { name, phone, email, comment, onSubmit, onChange, children } =
      this.props;
    return (
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
        action=""
      >
        {children}
        {name && (
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={({ target }) => onChange(target.name, target.value)}
          />
        )}
        {phone && (
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={({ target }) => onChange(target.name, target.value)}
          />
        )}
        {email && (
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={({ target }) => onChange(target.name, target.value)}
          />
        )}
        {comment && (
          <textarea
            type="text"
            rows="6"
            placeholder="Comment"
            name="comment"
            onChange={({ target }) => onChange(target.name, target.value)}
          ></textarea>
        )}
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
export default Form;
