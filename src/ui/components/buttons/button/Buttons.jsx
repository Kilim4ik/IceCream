import styles from "./button.module.css";

export default function Button({
  variant = "primary",
  position = false,
  arrow = false,
  type = "button",
  isBlank = false,
  link = "",
  children,
  onClick,
}) {
  return (
    <>
      {link ? (
        <a
          className={styles[variant]}
          rel="noreferrer"
          target={isBlank && "_blank"}
          href={link}
        >
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
        <button
          onClick={onClick}
          type={type}
          className={`${styles[variant]} ${
            position ? styles[`button-${position}`] : ""
          }`}
        >
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
