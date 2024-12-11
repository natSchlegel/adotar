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
  const data = [
    {
      id: 1,
      name: "Lorde",
      especie: "Gato",
      raca: "Indefinida",
      genero: "Fêmea",
      meses: 13,
      localizacao: "Diamantina",
      saude: {
        esterilizado: true,
        vacinado: false,
        desparasitado: true,
      },

      especial: {
        deficiente: false,
        hiv: false,
      },
    },
    {
      id: 2,
      name: "Kael",
      especie: "Gato",
      raca: "Indefinida",
      genero: "Fêmea",
      meses: 13,
      localizacao: "Diamantina",
      saude: {
        esterilizado: true,
        vacinado: false,
        desparasitado: true,
      },

      especial: {
        deficiente: false,
        hiv: false,
      },
    },
    {
      id: 3,
      name: "Flor",
      especie: "Gato",
      raca: "Indefinida",
      genero: "Fêmea",
      meses: 13,
      localizacao: "Diamantina",
      saude: {
        esterilizado: true,
        vacinado: false,
        desparasitado: true,
      },

      especial: {
        deficiente: false,
        hiv: false,
      },
    },
  ];

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4">
        {data.map((cat) => (
          <FlipCard key={cat.id} data={cat} />
        ))}
      </div>
    </>
  );
};

export default searchRect;
