import styles from "./card-content.module.css";
export default function CardContent({ type = "dark", children }) {
  return <p className={styles[type]}>{children}</p>;
}
