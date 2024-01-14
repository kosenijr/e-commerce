import React, { useState } from "react";
import styles from "../styles/FormInput.module.css";

const log = console.log;

const FormInput = (props, onError, onHandleError) => {
  const handleInputChange = (e) => {
    let [inputValue, isValid] = [e.target.value, false];

    // set up switch statement
    switch (props.name) {
      case "First Name":
      case "Last Name":
      case "Address Line 1":
      case "Address Line 2":
      case "City":
        isValid = /^[A-Za-z\s]+$/.test(inputValue);
        break;
      case "Email":
        
      isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          inputValue
        );
        break;
      // case "State":
      //   isValid = /^[A-Za-z]{2}$/.test(inputValue);
      //   break;
      case "Zip Code":
        isValid = /^\d{5}$/.test(inputValue);
        break;
      default:
        isValid = true; // No validation by default
        break;
    }
    onHandleError(!isValid);
    log(onHandleError);
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
        {onError && (
          <p>Incorrect input. Please enter your {props.name.toLowerCase()}.</p>
        )}
      </section>
    </div>
  );
};

export default FormInput;
