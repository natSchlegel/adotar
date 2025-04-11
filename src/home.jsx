import React from 'react';
import Footer from './Footer';
import styles from "./home.module.css";
import Tierheim from "../img/Tierheim.png";
import Paws from "../img/paws.svg";


const Home = () => {
  return (
    <div>
        <div className={styles.phraseDiv}>
          <span className={styles.phraseDivTitle}>
            Lorem ipsum dolor sit amet
          </span>
          <span className={styles.phraseDivText}>
            Proin ac fringilla nulla, sagittis viverra ligula. Nulla sed cursus elit, quis laoreet tortor. Donec facilisis feugiat turpis, eget facilisis risus consequat sit amet. Mauris maximus erat elit, nec eleifend diam gravida sit amet. Suspendisse potenti. Phasellus sit amet varius sem. Etiam sollicitudin quam lacus, in scelerisque turpis suscipit nec. Donec rutrum quam id mollis tristique. Nunc in ligula est.
          </span>
        </div>

      <div className={styles.paws}></div>
      <div className={styles.gridContainer}>
        <div className={styles.card}>
          <img src={Tierheim} className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>Proin Ac Fringilla Nulla</h3>
            <p>Sagittis viverra ligula. Nulla sed cursus elit, quis laoreet tortor. Donec facilisis feugiat turpis, eget facilisis risus consequat sit amet. Mauris maximus erat elit, nec eleifend diam gravida sit amet. Suspendisse potenti. Phasellus sit amet varius sem.</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardDate}>📅 25/04/2022</span>
              <span className={styles.cardArrow}>➜</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Tierheim} className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>Proin Ac Fringilla Nulla</h3>
            <p>Sagittis viverra ligula. Nulla sed cursus elit, quis laoreet tortor. Donec facilisis feugiat turpis, eget facilisis risus consequat sit amet. Mauris maximus erat elit, nec eleifend diam gravida sit amet. Suspendisse potenti. Phasellus sit amet varius sem.</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardDate}>📅 25/04/2022</span>
              <span className={styles.cardArrow}>➜</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Tierheim} className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>Proin Ac Fringilla Nulla</h3>
            <p>Sagittis viverra ligula. Nulla sed cursus elit, quis laoreet tortor. Donec facilisis feugiat turpis, eget facilisis risus consequat sit amet. Mauris maximus erat elit, nec eleifend diam gravida sit amet. Suspendisse potenti. Phasellus sit amet varius sem.</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardDate}>📅 25/04/2022</span>
              <span className={styles.cardArrow}>➜</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Tierheim} className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>Proin Ac Fringilla Nulla</h3>
            <p>Sagittis viverra ligula. Nulla sed cursus elit, quis laoreet tortor. Donec facilisis feugiat turpis, eget facilisis risus consequat sit amet. Mauris maximus erat elit, nec eleifend diam gravida sit amet. Suspendisse potenti. Phasellus sit amet varius sem.</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardDate}>📅 25/04/2022</span>
              <span className={styles.cardArrow}>➜</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Tierheim} className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>Proin Ac Fringilla Nulla</h3>
            <p>Sagittis viverra ligula. Nulla sed cursus elit, quis laoreet tortor. Donec facilisis feugiat turpis, eget facilisis risus consequat sit amet. Mauris maximus erat elit, nec eleifend diam gravida sit amet. Suspendisse potenti. Phasellus sit amet varius sem.</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardDate}>📅 25/04/2022</span>
              <span className={styles.cardArrow}>➜</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Tierheim} className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>Proin Ac Fringilla Nulla</h3>
            <p>Sagittis viverra ligula. Nulla sed cursus elit, quis laoreet tortor. Donec facilisis feugiat turpis, eget facilisis risus consequat sit amet. Mauris maximus erat elit, nec eleifend diam gravida sit amet. Suspendisse potenti. Phasellus sit amet varius sem.</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardDate}>📅 25/04/2022</span>
              <span className={styles.cardArrow}>➜</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home;
