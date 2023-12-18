import React, { useState } from "react";
import styles from "../styles/FormInput.module.css";

const FormInput = (props) => {
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setError(!props.validate(e.target.value));
  }

  return (
    <div className={styles["formInput"]}>
      <section className={styles["section-1"]}>
        <label>{props.name}</label>
        <div className={styles["input-wrapper"]}>
        <input placeholder={props.placeholder} />
        </div>
      </section>
      <section className={styles["section-2"]}>
        {error && <p>Incorrect input. Please enter a proper {props.value}.</p>}
      </section>
    </div>
  );
};

export default FormInput;
