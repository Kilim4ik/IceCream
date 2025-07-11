import Button from "../buttons/button/Buttons";
import styles from "./Form.module.css";

const Form = ({
  name = true,
  phone = true,
  email = false,
  comment = true,
  onSubmit,
  children,
}) => {
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
      {name && <input type="text" placeholder="Name" name="name" />}
      {phone && <input type="text" placeholder="Phone" name="phone" />}
      {email && <input type="text" placeholder="Email" name="email" />}
      {comment && (
        <textarea
          type="text"
          rows="6"
          placeholder="Comment"
          name="comment"
        ></textarea>
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default Form;
