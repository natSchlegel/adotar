import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Flipcart.module.css";
import cat from "../../img/cat.jpg?react";
import CardDetail from "../../img/cards/first.svg?react";

const FlipCard = ({data}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div className="cardPersonalized"  onClick={handleClick}>
        <img src={cat} className={styles.img} alt="Cat" />
        <div className={styles.cardText}>
          <span className={styles.animalName}>{data.name}</span>
          <span className={styles.age}>{data.meses} meses, {data.genero}</span>
          <span className={styles.location}>{data.localizacao} - MG</span>
        </div>
      </div>
      {/* Back Side */}
      <div className={styles.cardPersonalized} onClick={handleClick}>
        <h3>Health Details</h3>
        <ul>
          <li>Esterilizado: {data.saude.esterilizado ? "Yes" : "No"}</li>
          <li>Vacinado: {data.saude.vacinado ? "Yes" : "No"}</li>
          <li>Desparasitado: {data.saude.desparasitado ? "Yes" : "No"}</li>
        </ul>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
