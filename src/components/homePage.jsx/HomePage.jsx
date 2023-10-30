import React from "react";
import styles from "./HomePage.module.css";
import logo from "/Users/mallireddybalaramireddy/Desktop/projects/sinu/src/assets/logo.jpg";

function HomePage() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
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
        <div className={styles.content}>
          
          <div className={styles.quote}><p>Solid Foundations, Strong Partnerships</p></div>
          <div className={styles.companyName}><p className={styles.since}>ESTABLISHED SINCE 2001</p>CH BANGARAIAH AND CO.</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
