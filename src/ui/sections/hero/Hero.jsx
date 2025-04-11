import styled from "styled-components";
import styles from "./Hero.module.css";
import Button from "../../components/buttons/button/Buttons";

const Title = styled.h1`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 38px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fon-color);
`;
const Link = styled.a`
  padding: 12px 21px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #f8d24e;
`;
const Quantity = styled.span`
  font-family: var(--font-family);
  font-weight: 900;
  font-size: 46px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: right;
  color: var(--black);
`;
export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <Title>
          ice cream
          <br />
          made with <br />
          passion
        </Title>
        <div className={styles.btnContainer}>
          <Button link="#products" variant="outline">
            Products
          </Button>
          <Link href="#how"> How it works?</Link>
        </div>
        <div className={styles.heroContent}>
          <p>
            Indulge in a scoop of ice <br /> cream made with passion and <br />{" "}
            treat your taste buds to an <br /> unforgettable experience!
          </p>

          <svg width={41} height={16} aria-label="arrow">
            <use
              style={{
                fill: "white",
              }}
              href="/icons/sprite.svg#full-arrow"
            />
          </svg>
        </div>
        <ul className={styles.quantityList}>
          <li>
            <Quantity>16</Quantity>

            <p>cafes</p>
          </li>
          <li>
            <Quantity>23</Quantity>

            <p>food trucks</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
