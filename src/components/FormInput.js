import React, { useState } from "react";
import styles from "../styles/FormInput.module.css";

const FormInput = (props) => {
  return (
    <div className={styles["formInput"]}>
      <label>{props.name}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
