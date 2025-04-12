import React from 'react';
import Footer from './Footer';
import styles from "./home.module.css";
import Tierheim from "../img/Tierheim.png";
import Paws from "../img/paws.svg";
import PhraseHome from './Home/PhraseHome';
import BlogPost from './Home/Blog/BlogPost';


const Home = () => {
  return (
    <div>
      <PhraseHome />

      <div className={styles.paws}></div>
      <div className={styles.gridContainer}>
      {[...Array(6)].map((_, i) => (
            <BlogPost title="Proin Ac Fringilla Nulla" text="Sagittis viverra ligula. Nulla sed cursus elit, quis laoreet tortor. Donec facilisis feugiat turpis, eget facilisis risus consequat sit amet. Mauris maximus erat elit, nec eleifend diam gravida sit amet. Suspendisse potenti. Phasellus sit amet varius sem." date="25/04/2022" link="www.google.com" img={Tierheim}/>
          ))}
      
  
</div>
      <Footer />
    </div>
  )
}

export default Home;
