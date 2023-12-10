import React from "react";
import styles from "../styles/Display.module.css";

const Display = ({ onSubscribe, onHandleSubscribe }) => {
  // log(onSubscribe);

  return (
    // onSubscribe passes subscribe which is false
    <div
      className={`${styles["display-container"]} ${
        styles[onSubscribe ? "no-display" : ""]
      }`}
    >
      <div className={styles["display-statement"]}>
        <h3 className={styles["display-header"]}>
          Not sure if you have to move your vehicle today?
        </h3>
      </div>
      <span className={styles["display-header"]}></span>
      <div className={styles["display-section"]}>
        <h4 className={styles["call-to-action"]}>
          Be the first to know about alternate-side parking.
        </h4>
        <button
          className={styles["call-to-action-button"]}
          onClick={onHandleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Display;
