import React from "react";
import ContactForm from "../ContactForm";
import styles from "../../styles/sections/Contact.module.scss";
import Img from "next/image";
import email_illustration from '../../public/email.png'


const Contact = () => {
  return (
    <section className="app__container contact__bg" id="contact">
      <h1 className="section__header">Contact.</h1>
      <h3 className="section__subheader">Interested in working together?<br/> Feel free to reach out to me here!</h3>
      <div className={styles.form__container}>
        <div className="flex__item">
          <ContactForm />
        </div>
        <div className="flex__item">
          <Img
          src={email_illustration}
          alt='email illustration'
          >
          </Img>
        </div>
      </div>
    </section>
  );
};

export default Contact;
