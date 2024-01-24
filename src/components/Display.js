import React from "react";
import styles from "../styles/Display.module.css";
import { queryAllByAltText } from "@testing-library/react";

const log = console.log;

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
      <div className={styles["display-section"]}>
        <h3 className={styles["call-to-action"]}>
          Subscribe to receive daily{" "}
          <span style={{ color: "lightgreen" }}> alternate-side parking </span>
          notifications.
        </h3>
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
