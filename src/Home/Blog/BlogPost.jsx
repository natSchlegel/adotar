import React from 'react';
import styles from './BlogPost.module.css';

const BlogPost = ({ text, title, date, link, img }) => {
    return (


          
        <div className={styles.card}>
            <img src={img} className={styles.cardImg} />
            <div className={styles.cardContent}>
                <h3>{title}</h3>
                <p>{text.slice(0, 200)}...</p>
                <div className={styles.cardFooter}>
                    <span className={styles.cardDate}>📅 {date}</span>
                    <a href={link} target="_blank" className={styles.cardArrow}>➜</a>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
