import React from "react";
import styles from "./Header.module.css";
import Logo from "../../../img/logo.svg";
import Instagram from "../../../img/instagram.svg";
import Facebook from "../../../img/facebook.svg";


const Header = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <img src={Logo} />
      </div>
      <div className={styles.nav}>
        <a>sobre</a>
        <a>adote</a>
        <a>doações</a>
        <a>perguntas frequentes</a>
        <a>contato</a>
      </div>
      <div className={styles.text}>“Cada ato de amor
        e compaixão por um
        animal é uma
        contribuição para
        um mundo melhor. ”</div>
      <div className={styles.social}><img src={Facebook} /><img src={Instagram} /></div>
    </div>
  );
};

export default Header;
