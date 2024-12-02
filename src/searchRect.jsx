import React from "react";
import Cat from "../img/cat.jpg";
import Male from "../img/male.svg?react";
import styles from "./searchRect.module.css";
import localizacao from "../img/location.svg?react";
import Mail from "../img/mail.svg?react";
import Call from "../img/call.svg?react";
import ReactCardFlip from "react-card-flip";
import FlipCard from "./flipcart";

const searchRect = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img src={Cat} />
          <div className="card-body">
            <div className={styles.tituloGato}>
              <span className={styles.nomeAnimal}>Nome do Animal</span>
              <img src={Male} />
            </div>
            <div className={styles.localizacao}>
              <img src={localizacao} />
              <span className={styles.localizacaoCidade}>Diamantina - MG</span>
            </div>

            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>

            <div className={styles.infoContainer}>
              <div className={styles.infoBox}>
                <span>3,2 Kg</span>
                <div className={styles.label}>PESO</div>
              </div>
              <div className={styles.infoBox}>
                <span>9 A</span>
                <div className={styles.label}>IDADE</div>
              </div>
              <div className={styles.infoBox}>
                <span>22 cm</span>
                <div className={styles.label}>ALTURA</div>
              </div>
            </div>

            <div className={styles.dono}>
              <div className={styles.circle}></div>
              <span>Nome do Done</span>
              <div className={styles.iconesContato}>
              <circle className={styles.circleCall}>
                <img className={styles.callsvg} src={Call} />
              </circle>
              <circle className={styles.circleMail}>
              <img className={styles.mallsvg} src={Mail} />
              </circle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchRect;
