import React from "react";
import styles from "../styles/Navbar.module.scss";

import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>JM</div>
      <div>
        <IconContext.Provider value={{ size: "2em" }}>
          <CgMenuRight />
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default Navbar;
