import React from 'react'
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer__container}>
        <p>Created with
        <a href='https://nextjs.org/' target='_blank' rel="noreferrer"> Next.js </a> 
        and 
        <a href='https://www.sanity.io/' target='_blank ' rel="noreferrer"> Sanity.io</a>.
        </p>
    </div>
  )
}

export default Footer