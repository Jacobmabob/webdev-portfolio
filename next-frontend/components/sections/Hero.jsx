import React from "react";
// import globalStyles from '../../styles/globals.scss'
import styles from '../../styles/sections/Hero.module.scss';
import Button from "../Button";
import Link from "next/link";

import { motion } from "framer-motion";

const headerVariants = {
  initial: {
    height: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  animate: {
    height: 500,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};


const Hero = () => {
  return (
    <section className='app__container hero__bg'>

      <motion.div
        className={styles.hero__container}
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: .5
          },
          y: 0
        }}
        // viewport={{ once: true }}
      // animate="animate"
      // variants={headerVariants}

      >
        <p className={styles.text__small}>Hi, I&apos;m</p>
        <span>Jacob McCarthy.</span>
        <p className={styles.text__med}>Fullstack Web Developer </p>
        <p className={styles.text__small}>based in Atlanta, GA</p>
        <div className={styles.button__container}>
          <Link
            href='mailto:jacobmccarthy.dev@gmail.com'
            passHref={true}
            target="_blank"
            rel="noreferrer"
          >
            <Button text='Contact me' />

          </Link>
          <a
            href='https://docs.google.com/document/d/1STlqHbRR9uXl5RYD15uiMD2P-JMNG7s-Helm7dT7YTY/edit?usp=sharing'
            target="_blank" rel="noreferrer"
          >
            <Button text='Resume' />

          </a>
        </div>
      </motion.div>

    </section>
  )

};

export default Hero;
