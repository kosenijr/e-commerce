import React, { useState } from "react";
import styles from "../styles/FormInput.module.css";

const log = console.log;

const FormInput = (props) => {
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    log(inputValue, e.target, e.target.value);
  };

  return (
    <div className={styles["formInput"]}>
      <section className={styles["section-1"]}>
        <label>{props.name}</label>
        <input
          name={props.value}
          onChange={handleInputChange}
          placeholder={props.placeholder}
          type="text"
        />
      </section>
      <section className={styles["section-2"]}>
        {error && <p>Incorrect input. Please enter a proper {props.value}.</p>}
        {/* <p>Incorrect input. Please enter a proper {props.value}.</p> */}
      </section>
    </div>
  );
};

export default FormInput;
