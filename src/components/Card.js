import React from "react";
import styles from "@/styles/Card.module.css";


export default function Card(props) {
    return (
        <>
                    <div className={styles.card}>
                <div className={styles.cardImage}>
                    <img src={props.cardImage}/>
                    </div> 
                    <p className={styles.cardDescription}></p>
                    <p className={styles.cardLink}></p>
                 </div>
        
                <div className={styles.card}>
                <div className={styles.cardImage2}>
                    <img src={props.cardImage2}/>
                    </div> 
                    <p className={styles.cardDescription}></p>
                    <p className={styles.cardLink}></p>
                </div>
        </>
    )
}