import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./Flipcart.module.css";
import catImg from "../../img/cat.jpg?react";

import happyCat from "../../img/happyCat.svg";
import sadCat from "../../img/sadCat.svg";
import dog from "../../img/dog.svg";
import cat from "../../img/cat.svg";
import children from "../../img/children.svg";

import CardDetail from "../../img/cards/first.svg?react";




const FlipCard = ({data}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  console.log(data);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div className={`${styles.cardPersonalized} card d-flex flex-column align-items-center justify-content-center text-left bg-light shadow-sm`}  onClick={handleClick}>
        <img src={catImg} className={styles.img} alt="Cat" />
        <div className={styles.cardText}>
          <span className={styles.animalName}>{data.name}</span>
          <span className={styles.age}>{data.meses} meses, {data.genero}</span>
          <span className={styles.location}>{data.localizacao} - MG</span>
        </div>
      </div>
      {/* Back Side */}
      <div className={styles.cardPersonalized} onClick={handleClick}>
      <span className={styles.animalName}>{data.name}</span>
      <span className={styles.raca}>{data.raca}</span>

        
          <span>{data.saude.esterilizado ? <img src={happyCat} style={{ width: '45px', height: '45px' }}/> : <img src={sadCat} style={{ width: '45px', height: '45px' }}/>} Esterilizado</span>
          <span>{data.saude.vacinado ?<img src={happyCat} style={{ width: '45px', height: '45px' }}/> : <img src={sadCat} style={{ width: '45px', height: '45px' }}/>} Vacinado</span>
          <span>{data.saude.desparasitado ? <img src={happyCat} style={{ width: '45px', height: '45px' }}/> : <img src={sadCat} alt="Não-desparasitado" style={{ width: '45px', height: '45px' }}/> } Desparasitado</span>
          <span className={styles.raca}>Se dá bem com:</span>
          <span>{data.lidaBem.gato ? <div><img src={cat} style={{ width: '45px', height: '45px' }}/>Outros gatos</div> : ""} </span>
          <span>{data.lidaBem.crianca ? <div><img src={children} style={{ width: '45px', height: '45px' }}/>Crianças</div> : ""} </span>
          <span>{data.lidaBem.cachorro ? <div><img src={dog} style={{ width: '45px', height: '45px' }}/>Cachorros</div> : ""} </span>



      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
