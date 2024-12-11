import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./Flipcart.module.css";
import cat from "../img/cat.jpg";
import CardDetail from "../img/cards/first.svg?react";

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

        <svg
          className={styles.cardOverlay}
          id="eCP7omXrHiu1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 208 100"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          project-id="0b193f5160ab40908d2e806cae7e9dc3"
          export-id="11bec8cbb4e24219ad8c0394880724c7"
          cached="false"
        >
          <path
            d="M125.388902,219.254353v32.053784h111.968948c-2.904328-1.220722-7.111987-7.776667-8.491042-18.496091-1.754513-13.637864-6.987109-30.699505-25.230618-27.947109-6.464039.976044-17.991982,6.187944-31.92834,0-7.932266-3.522041-20.383974-.329816-27.991115,0-11.402521.49437-12.871768-.622428-18.327833,14.389416Z"
            transform="matrix(1.847508 0 0 2.014636-231.656999-406.29442)"
            fill="#98c3a5"
            stroke-width="0.6"
          />

          <foreignObject x="10" y="10" width="180" height="80">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <span>Ptashka</span>
              <span>Girl, 3 years</span>
              <div className="buttons">
                <button className="btn adopt">To adopt</button>
                <button className="btn favorite">❤️</button>
              </div>
            </div>
          </foreignObject>
        </svg>
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
