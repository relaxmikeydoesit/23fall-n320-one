import React from 'react';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import Card from '@/components/Card';


export default function Home() {
  return (
    <>
    <Hero heroImage='/hero.jpeg'/>
    <p className={styles.bigGoldFont}>Philapthropy</p>
    <p className={styles.smallGoldFont}>As a way to give back, as of the launch of my Etsy store on 12.03.23, I have selected two causes to receieve a percentage of the revenue that PrintAPlanUS brings in. <br></br>
    Learn more about the causes I support below.</p>

    <div className={styles.cardcontainer}>
    <Card cardImage={'/iudm.jpg'} 
    cardDescription={'&quot;I have had the honor of close, continuous involvement with IUDM since first being invited to share my patient story on-stage at IUDM 2004. Its inspiring to see the impact the organization has made as it has grown to become the second largest student-led philanthropies in the US.&quot;'}/> 
    <Card cardImage={'/lhbr.jpg'}/> 
    </div>
    
    
   

    </>
    
  
    )
}
