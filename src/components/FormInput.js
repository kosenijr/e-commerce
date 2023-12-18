import React, { useState } from "react";
import styles from "../styles/FormInput.module.css";

const FormInput = (props) => {
  return (
    <div className={styles["formInput"]}>
      <section className={styles["section-1"]}>
        <label>{props.name}</label>
        <input placeholder={props.placeholder} />
      </section>
      <section className={styles["section-2"]}>
        <p>Incorrect input. Please enter a proper {props.value}.</p>
      </section>
    </div>
  );
};

export default FormInput;
