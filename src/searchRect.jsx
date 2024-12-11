import React from "react";
import Cat from "../img/cat.jpg";
import Male from "../img/male.svg?react";
import styles from "./searchRect.module.css";
import localizacao from "../img/location.svg?react";
import Mail from "../img/mail.svg?react";
import Call from "../img/call.svg?react";
import ReactCardFlip from "react-card-flip";
import FlipCard from "./cards/Flipcart";

const searchRect = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <FlipCard />
    </div>
  );
};

export default searchRect;
