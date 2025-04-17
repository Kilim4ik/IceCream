import styled from "styled-components";
export default function FormCard({ colors, img, title }) {
  const Card = styled.div`
    display: grid;
    justify-items: center;
    flex: 1;
    position: relative;
    color: var(--black);
    background: ${colors.card};
    padding: 95px 16px 20px;
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
    width: 132px;
    aspect-ratio: 1/1;
    position: absolute;
    top: -40px;
    span {
      z-index: 0;

      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: ${colors.card};
      transform: translateY(2px);
      border-radius: 50%;
      box-shadow: 0 8px 30px ${colors.imgShadow};
    }
    img {
      position: relative;
      width: 100%;
      border-radius: 50%;
      box-shadow: 0 8px 30px rgba(153, 114, 23, 0.2);
    }
  `;
  return (
    <Card>
      <ImgWrapper>
        <span></span>
        <img src={img} alt={title} />
      </ImgWrapper>
      <h3>{title}</h3>
    </Card>
  );
}
