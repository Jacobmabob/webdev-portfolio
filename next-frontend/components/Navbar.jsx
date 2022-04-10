import React from "react";
import styles from "../styles/Navbar.module.scss";
import SideNav from "./SideNav";

import Link from "next/link";

import {
  CgMenuRight,
  CgClose,
  HiOutlineMail,
  AiOutlineLinkedin,
  FiGithub
} from "react-icons/cg";
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
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    height: 400,
    transition: {
      staggerChildren: 0.2,
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

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -50 }}
      whileInView={{ y: 0 }}
    >
      <div className={styles.nav__header}>
        <div className={styles.logo}>JM</div>
        <div>
          <IconContext.Provider value={{ size: "2em" }}>
            <button onClick={cycleOpen} className={styles.hamburger}>
              {open ? <CgClose /> : <CgMenuRight />}
            </button>
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
              transition: { duration: 0.3 },
            }}
          >
            {links.map(({ name, to, id }) => (
              <motion.a
                key={id}
                href={to}
                variants={itemVariants}
                className={styles.nav__links}
              >
                {name}
              </motion.a>
            ))}
            <motion.div className={styles.socials__container}>
              <IconContext.Provider>
                <div className={styles.email}>
                  {/* <HiOutlineMail /> */}
                  <Link
                    href="mailto:jacobmccarthy.dev@gmail.com"
                    passHref={true}
                  >
                    jacobmccarthy.dev@gmail.com
                  </Link>
                </div>
                <div className={styles.socials__icons}></div>
              </IconContext.Provider>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
