import { useState } from "react";
import Button from "../../components/buttons/button/Buttons";
import Title from "../../components/title/Title";
import HiimList from "./HiimList";
import styles from "./HowItIsMade.module.css";
import modalStyles from "./HiimModal.module.css";
// import Modal from "../../components/modal/Modal";

export default function HowItIsMade() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="how-it’s-made" className={styles.section}>
        <div className="container">
          <Title
            subTitle="tradition and love"
            title="how it’s made?"
            isFonColor={true}
          />
          <div className={styles.information}>
            <div className={styles.imgWrapper}>
              <span className={styles.imgBG}></span>
              <picture>
                <source
                  srcSet="
                ./images/how-is-it-made/cow.png 1x,
      ./images/how-is-it-made/cow-@2x.png 2x,
      ./images/how-is-it-made/cow-@3x.png 3x
    "
                  type="image/png"
                />
                <img
                  className={styles.image}
                  src="./images/how-is-it-made/cow.png"
                  alt="Cow"
                />
              </picture>
            </div>
            <div className={styles.informationContent}>
              <div className={styles.textContainer}>
                <p>
                  Ice is a place where you will become not only a little <br />
                  happier, but also healthier. Health is the main value <br />{" "}
                  for us, and we follow it when creating our handmade <br />{" "}
                  desserts.
                </p>
                <p>
                  We use traditional recipes and 100% natural ingredients. Our
                  products are so natural that they can be given to children
                  from the age of three years. Sweets lovers can expect 55{" "}
                  <br /> types of ice cream, 15 types of coffee and 23
                  milkshakes.
                </p>
                <p>
                  This is enough to choose ice cream and coffee for any mood!
                </p>
              </div>
              <Button arrow={true}>Read more</Button>
            </div>
          </div>
          <HiimList />
        </div>
      </section>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>How it’s made?</h3>
        <div className={modalStyles.videoWrapper}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="How it's made"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className={modalStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et
        </p>
      </Modal> */}
    </>
  );
}
