import React from "react";
import Header from "../Header/Header";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
}

export default AboutUs;
