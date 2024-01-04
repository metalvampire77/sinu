import React from "react";
import Header from "../Header/Header";
import styles from "./Investors.module.css";

function Investors() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
}

export default Investors;
