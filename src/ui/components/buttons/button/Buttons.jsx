import styles from "./button.module.css";

export default function Button({
  variant = "primary",
  arrow = false,
  type = "button",
  link = "",
  children,
  onClick,
}) {
  return (
    <>
      {link ? (
        <a className={styles[variant]} href={link}>
          {children}
          {arrow && (
            <svg
              aria-label="arrow"
              width={7}
              height={10}
              viewBox="0 0 7 10"
              className={styles.arrow}
            >
              <use href="/icons/sprite.svg#arrow" />
            </svg>
          )}
        </a>
      ) : (
        <button onClick={onClick} type={type} className={styles[variant]}>
          {children}
          {arrow && (
            <svg
              aria-label="arrow"
              width={7}
              height={10}
              viewBox="0 0 7 10"
              className={styles.arrow}
            >
              <use href="/icons/sprite.svg#arrow" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
