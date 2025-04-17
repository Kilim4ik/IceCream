import styles from "./HowItIsMade.module.css";
const listElems = [
  {
    id: "cow",
    num: "721",
    txt: "Aliquam ac dui vel dui vulputate consectetur. Mauris massa.",
  },
  {
    id: "width",
    num: "16kg",
    txt: "Aliquam ac dui vel dui vulputate consectetur. Mauris massa.",
  },
  {
    id: "ice-cream",
    num: "84",
    txt: "Aliquam ac dui vel dui vulputate consectetur. Mauris massa.",
  },
];
export default function HiimList() {
  return (
    <ul className={styles.list}>
      {listElems.map(({ id, num, txt }) => {
        return (
          <li className={styles.listElem} key={id}>
            <svg
              style={{
                padding: "7px",
                borderRadius: "50%",
                backgroundColor: "#f8d24e",
              }}
              width={50}
              height={50}
              aria-label={id}
            >
              <use href={`/icons/sprite.svg#${id}`} />
            </svg>
            <span>{num}</span>
            <p>{txt}</p>
          </li>
        );
      })}
    </ul>
  );
}
