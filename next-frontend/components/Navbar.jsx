import React from "react";
import styles from "../styles/Navbar.module.scss";
import SideNav from "./SideNav";

import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { motion, useCycle } from "framer-motion";

const links = [
  { name: "About", to: "#", id: 1 },
  { name: "Projects", to: "#", id: 2 },
  { name: "Contact", to: "#", id: 3 },
  { name: "Blog", to: "#", id: 4 },
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const Navbar = () => {

  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className={styles.navbar}
    >
      <div className={styles.nav__header}>
        <div className={styles.logo}>JM</div>
        <div>
          <IconContext.Provider value={{ size: "2em" }}>
          <button onClick={cycleOpen}>{open ? "Close" : "Open"}
          <CgMenuRight />
          </button> 
          </IconContext.Provider>
        </div>
      </div>
      {open && (
              <motion.div
        className={styles.nav__links}
        initial="closed"
        animate="open"
        variants={sideVariants}
      >
        {links.map(({ name, to, id }) => (
          <motion.a key={id} href={to} variants={itemVariants}>
            {name}
          </motion.a>
        ))}
      </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
