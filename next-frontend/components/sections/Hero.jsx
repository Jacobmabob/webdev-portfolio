import React from "react";
// import globalStyles from '../../styles/globals.scss'
import styles from '../../styles/sections/Hero.module.scss';


const Hero = () => {
  return (
    <section className='app__container'>
       
          <div className={styles.hero__container}>
            <p className={styles.text__small}>Hi, I'm</p>
            <span>Jacob McCarthy.</span>
            <p className={styles.text__med}>Fullstack Web Developer </p>
            <p className={styles.text__small}>based in Atlanta, GA</p>
          </div>
        
    </section>
  )

};

export default Hero;
