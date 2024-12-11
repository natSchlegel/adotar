import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./Flipcart.module.css";
import cat from "../../img/cat.jpg?react";
import CardDetail from "../../img/cards/first.svg?react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div className={styles.cardPersonalized} onClick={handleClick}>
        <img src={cat} className={styles.img} alt="Cat" />
        <div class={styles.cardText}>
          <span className={styles.animalName}>Nome do Animal</span>
          <span className={styles.age}>14 meses, fêmea</span>
          <span className={styles.location}>Diamantina - MG</span>
        </div>
      </div>
      {/* Back Side */}
      <div className={styles.cardPersonalized} onClick={handleClick}>
        <h3>Back Side</h3>
        <p>Click to flip back!</p>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
