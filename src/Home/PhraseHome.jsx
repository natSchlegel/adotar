import React from 'react';
import styles from './PhraseHome.module.css';

const PhraseHome = () => {
  return (
        <div className={styles.phraseDiv}>
          <span className={styles.phraseDivTitle}>
            Lorem ipsum dolor sit amet
          </span>
          <span className={styles.phraseDivText}>
            Proin ac fringilla nulla, sagittis viverra ligula. Nulla sed cursus elit, quis laoreet tortor. Donec facilisis feugiat turpis, eget facilisis risus consequat sit amet. Mauris maximus erat elit, nec eleifend diam gravida sit amet. Suspendisse potenti. Phasellus sit amet varius sem. Etiam sollicitudin quam lacus, in scelerisque turpis suscipit nec. Donec rutrum quam id mollis tristique. Nunc in ligula est.
          </span>
        </div>
  )
}

export default PhraseHome
