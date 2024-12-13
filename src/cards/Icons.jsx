import React from 'react';
import styles from "./icons.module.css";

const Icons = ({image, alt}) => {
  return (
    <div className={styles.grid}>
      <img src={image} style={{ width: '45px', height: '45px' }}/>
      <span className={styles.alt}>{alt}</span>
    </div>
  )
}

export default Icons
