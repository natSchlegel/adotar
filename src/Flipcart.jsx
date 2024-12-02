import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from "./Flipcart.module.css";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div className={styles.cardPersonalized} onClick={handleClick}>
        <h3>Front Side</h3>
        <p>Click to flip!</p>
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
