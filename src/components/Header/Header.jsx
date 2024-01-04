import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.jpg";

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} alt="logo" className={styles.img} />
          <div className={styles.nav}>
            <ul className={styles.list}>
              <li>HOME</li>
              <li>SERVICES</li>
              <li>PROJECTS</li>
              <li>STATISTICS</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
