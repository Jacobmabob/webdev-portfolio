import React from "react";
import styles from "../../styles/sections/Projects.module.scss";
import barkrImg from "../../assets/barkr.png";
import Image from "next/image";

import { IconContext } from "react-icons";
import { VscGithub } from "react-icons/vsc";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";

const tags = ["Socket.io", "Chakra UI", "GraphQl"];


const Projects = ({ projectData }) => {
  return (
    <section className="app__container">
      <div className="flex__item">
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.card__header}>
              <Image 
                src={barkrImg}
                className={styles.project__img}

                // layout='intrinsic'
              />
              <motion.div className={styles.github__link} whileHover={{ scale: 1.3 }}>
                <IconContext.Provider value={{ size: "3em" }}>
                  <VscGithub />
                </IconContext.Provider>
              </motion.div>
            </div>
            <div className={styles.card__body}>
              <h1>Barkr</h1>
              <h3>Featured Project</h3>
              <p>
                MERN stack social media application for dog owners seeking
                meanigful connections wtih like-minded owners
              </p>
            </div>
            <div className={styles.card__footer}>
              <div className={styles.tags}>
                {tags.map((tag, index) => (
                  <p className={styles.tech}>{tag}</p>
                ))}
              </div>
              <a href="#">
                <IconContext.Provider value={{ size: "1em" }}>
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
      <div className="flex__item">Project 2</div>
      <div className="flex__item">Project 3</div>
    </section>
  );
};

export default Projects;
