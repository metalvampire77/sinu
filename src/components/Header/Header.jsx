import React from "react";
import styles from "./Header.module.css";
import logo from "/Users/mallireddybalaramireddy/Desktop/projects/sinu/src/assets/logo.jpg";

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.img} />
      <div className={styles.nav}>
        <ul className={styles.list}>
          <li>HOME</li>
          <li>PROJECTS</li>
          <li>INVESTORS</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
