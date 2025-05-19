import Button from "../buttons/button/Buttons";
import styles from "./Form.module.css";

export default function Form({
  name = true,
  phone = true,
  email = false,
  comment = true,
}) {
  
  return (
    <form className={styles.form} action="">
      {name && <input type="text" placeholder="Name" />}
      {phone && <input type="text" placeholder="Phone" />}
      {email && <input type="text" placeholder="Email" />}
      {comment && (
        <textarea type="text" rows="6" placeholder="Comment"></textarea>
      )}
      <Button>Submit</Button>
    </form>
  );
}
