import React from "react";
import styles from "./Header.module.css";
import Logo from "../../../img/logo.svg";
import Instagram from "../../../img/instagram.svg";
import Facebook from "../../../img/facebook.svg";
import { useState, useEffect } from "react";


const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className={isSticky ? styles.menuSticky : styles.menu}>
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
      <div className={`${styles.text} ${isSticky ? styles.hidden : ''}`}>
        “Cada ato de amor
        e compaixão por um
        animal é uma
        contribuição para
        um mundo melhor. ”</div>
        <div className={`${styles.social} ${isSticky ? styles.hidden : ''}`}>
        <img src={Facebook} /><img src={Instagram} /></div>
    </div>
  );
};

export default Header;