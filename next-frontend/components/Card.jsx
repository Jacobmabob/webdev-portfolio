import React from "react";
import styles from "../styles/sections/Projects.module.scss";
import sanityClient from '../client'

import Img from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import { urlFor } from "../client";
import barkrImg from "../public/barkr.png";

import { IconContext } from "react-icons";
import { VscGithub } from "react-icons/vsc";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";


const Card = ({ projectData }) => {
  const { tags, title, description, codeLink, projectLink, imgUrl } =
    projectData;

    

  const imageProps = useNextSanityImage(
      sanityClient,
      projectData.imgUrl
  )

  return (
    <div className="flex__item">
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <div className={styles.card__header}>
        
                <div className={styles.image__wrapper}>
                    <Img
                    {...imageProps}
                    layout="intrinsic"
                    />
                </div>
            <motion.div
              className={styles.github__link}
              whileHover={{ scale: 1.3 }}
            >
              <IconContext.Provider value={{ size: "3em" }}>
                <VscGithub />
              </IconContext.Provider>
            </motion.div>
          </div>
          <div className={styles.card__body}>
            <h1>{title}</h1>
            <h3>Featured Project</h3>
            <p>{description}</p>
          </div>
          <div className={styles.card__footer}>
            <div className={styles.tech__container}>
              {tags.map((tag, index) => (
                <p className={styles.tech} key={index}>
                  {tag}
                </p>
              ))}
            </div>
            <a href="#">
              <IconContext.Provider value={{ size: ".7em" }}>
                <motion.div
                  className={styles.site__link}
                  style={{ color: "#B41825" }}
                  whileHover={{
                    color: "#E74B58",
                  }}
                >
                  <MdDoubleArrow />
                  <p>visit site</p>
                </motion.div>
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
