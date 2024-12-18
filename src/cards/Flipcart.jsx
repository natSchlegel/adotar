import React, { Children, useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./Flipcart.module.css";
import catImg from "../../img/cat.jpg?react";
import Icons from "./Icons";
import happyCat from "../../img/happyCat.svg";
import sadCat from "../../img/sadCat.svg";
import dog from "../../img/dog.svg";
import cat from "../../img/cat.svg";
import children from "../../img/children.svg";


const FlipCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const adoptMe = (event) => {
    event.preventDefault();
    window.alert("Test");
  }

  console.log(data);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div className={`${styles.cardPersonalized} card d-flex flex-column align-items-center justify-content-center text-left bg-light shadow-sm`} onClick={handleClick}>
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
        
        {(data.saude.esterilizado || data.saude.vacinado || data.saude.desparasitado) && (
          <div>
            <span className={styles.raca}>Saúde:</span>
            <div className={styles.grid}>
              {data.saude.esterilizado ? <span><Icons image={happyCat} alt="Esterilizado" /></span> : null}
              {data.saude.vacinado ? <span><Icons image={happyCat} alt="Vacinado" /></span> : null}
              {data.saude.desparasitado ? <span><Icons image={happyCat} alt="Desparasitado" /></span> : null}
            </div>
          </div>
        )}

      {(data.lidaBem.gato || data.lidaBem.crianca || data.lidaBem.cachorro) && (
        <div><span className={styles.raca}>Se dá bem com:</span>
          <div className={styles.grid}>
            {data.lidaBem.gato ? <span><Icons image={cat} alt="Outros gatos" /></span> : null}
            {data.lidaBem.crianca ? <span><Icons image={children} alt="Crianças" /></span> : null}
            {data.lidaBem.cachorro ? <span><Icons image={dog} alt="Cachorros" /></span> : null}
          </div>
          </div>
      )}

      {(data.especial.hiv || data.especial.deficiente) && (
        <div>
          <span className={styles.raca}>Especial</span>
          <div className={styles.grid}>
            {data.especial.hiv ? <span><Icons image={sadCat} alt="HIV" /></span> : null}
            {data.especial.deficiente ? <span><Icons image={sadCat} alt="Deficiente" /></span> : null}
          </div>
        </div>
      )}
      <button className="btn btn-primary btn-sm" onClick={adoptMe}>Me Adote</button>
    </div>
    </ReactCardFlip >
  );
};

export default FlipCard;
