import { React, useState, useEffect } from "react";
import styles from "../../styles/Navbar.module.scss";
import SideNav from "./SideNav";

import Link from "next/link";

import { CgMenu, CgClose } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";
import { motion, useCycle, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", to: "#about", id: 1 },
  { name: "Projects", to: "#projects", id: 2 },
  { name: "Contact", to: "#contact", id: 3 },
  { name: "Blog", to: "#blog", id: 4 },
];

const sideVariants = {
  closed: {
    height: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    height: 550,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 4,
    },
  },
  open: { opacity: 1 },
};

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <motion.nav
      className={`${styles.navbar} ${scrollPosition < 60 ? null : styles.navbar__body}`}
      initial={{ y: 20 }}
      animate={{ y: 0 }}
    >
      <div className={styles.nav__header}>
        <div className={styles.logo}>JM</div>
        <div className={styles.hamburger__wrapper}>
          <IconContext.Provider value={{ size: "3em" }}>
            <motion.button
              onClick={cycleOpen}
              className={styles.hamburger__btn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              {open ? <CgClose /> : <CgMenu />}
            </motion.button>
          </IconContext.Provider>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.nav__link__container}
            initial="closed"
            animate="open"
            variants={sideVariants}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.1 },
            }}
          >
            {links.map(({ name, to, id }) => (
              <motion.a
                key={id}
                href={to}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
                whileTap={{ scale: 1 }}
                className={styles.nav__links}
              >
                {name}
              </motion.a>
            ))}
            <motion.div className={styles.socials__container}>
              <IconContext.Provider value={{ size: "2em" }}>
                <motion.div
                  className={styles.email}
                  whileHover={{ scale: 1.02 }}
                >
                  <HiOutlineMail />
                  <motion.a
                    href="mailto:jacobmccarthy.dev@gmail.com"
                    target="_blank"
                  // whileHover={{scale: 1.02}}
                  >
                    jacobmccarthy.dev@gmail.com
                  </motion.a>
                </motion.div>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: "2em" }}>
                <div className={styles.socials__icons}>
                  <motion.a
                    href="https://github.com/Jacobmabob"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FiGithub />
                  </motion.a>
                  <motion.a href="https://www.linkedin.com/in/jacobandersonmccarthy/" target="_blank" whileHover={{ scale: 1.2 }}>
                    <AiOutlineLinkedin />
                  </motion.a>
                </div>
              </IconContext.Provider>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
