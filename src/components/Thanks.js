// imports
import React from "react";
import styles from "../styles/Thanks.module.css";

const Thanks = ({ onThanks }) => {
  return (
    <div
      className={styles[onThanks ? "thanks-display-on" : "thanks-display-off"]}
    >
      <p>Thank you for your submission!</p>
      <p>
        Please confirm your email to receive future Alternate-Side Parking
        notifications.
      </p>
    </div>
  );
};

export default Thanks;
