import React from "react";
import styles from "../styles/Navbar.module.scss";

import { motion, useCycle } from "framer-motion";




const SideNav = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.aside 
        initial={{ width: 0 }} 
        animate={{ width: 300 }}
        className={styles.nav__container}
    >
      <motion.div
        className={styles.side__nav}
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
    </motion.aside>
  );
};

export default SideNav;
