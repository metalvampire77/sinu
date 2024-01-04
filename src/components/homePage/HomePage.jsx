import React from "react";
import styles from "./HomePage.module.css";
import logo from "../../assets/logo.jpg";

function HomePage() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.quote}>
            <p>Solid Foundations, Strong Partnerships</p>
          </div>
          <div className={styles.companyName}>
            <p className={styles.since}>ESTABLISHED SINCE 2001</p>CH BANGARAIAH
            AND CO.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
