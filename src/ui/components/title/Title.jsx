import styles from "./Title.module.css";
export default function Title({ subTitle, title, isFonColor = false }) {
  return (
    <h2
      className={`${styles.title} ${isFonColor && styles["title--fon-color"]}`}
    >
      <span className={styles.subTitle}>{subTitle}</span>
      {title}
    </h2>
  );
}
