import React from "react";
import ContactForm from "../ContactForm";
import styles from "../../styles/sections/Contact.module.scss";
import Img from "next/image";
import email_illustration from '../../public/email.png'


const Contact = () => {
  return (
    <section className="app__container" id="contact">
      <h1 className="section__header">Contact</h1>
      <h3 className="section__subheader">Let's talk!</h3>
      <div className={styles.form__container}>
        <div className="flex__item">
          <ContactForm />
        </div>
        <div className="flex__item">
          <Img
          src={email_illustration}
          >
          </Img>
        </div>
      </div>
    </section>
  );
};

export default Contact;
