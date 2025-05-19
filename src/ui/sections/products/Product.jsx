import styles from "./Products.module.css";
import styled from "styled-components";
export default function Product({ onCLick, colors, urls, title, text }) {
  const Card = styled.div`
    display: grid;
    justify-items: center;
    flex: 1;
    position: relative;
    color: var(--black);
    background: ${colors.card};
    padding: 165px 64px 60px;
    border-radius: 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 176%;
    letter-spacing: 0.04em;
    text-align: center;
    transition: all 0.2s ease;
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 30px 0 rgba(212, 20, 67, 0.2);
    }
  `;
  const ImgWrapper = styled.div`
    width: 302px;
    aspect-ratio: 1/1;
    position: absolute;
    top: -180px;
    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: ${colors.card};
      transform: translateY(16px);
      border-radius: 50%;
      box-shadow: 0 8px 30px ${colors.imgShadow};
    }
    img {
      width: 100%;
      border-radius: 50%;
      box-shadow: 0 8px 30px rgba(153, 114, 23, 0.2);
    }
  `;
  return (
    <Card onClick={onCLick}>
      <ImgWrapper>
        <span></span>
        <img className={styles.img} src={urls.photo} alt={`${title} `} />
      </ImgWrapper>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p
        style={{
          marginTop: 66,
        }}
      >
        {text}
      </p>
      <a href={urls.link}>
        <svg
          style={{
            marginTop: 58,
            width: 41,
            height: 16,
          }}
          aria-label="arrow"
        >
          <use href="/icons/sprite.svg#full-arrow" />
        </svg>
      </a>
    </Card>
  );
}
