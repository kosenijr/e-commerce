import React from "react";
import styles from "../styles/FormInput.module.css";

const log = console.log;

const FormInput = (props) => {
  const { errors, handleValueChange, setErrors } = props;

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // set up switch statement
    switch (props.name) {
      case "First Name":
      case "Last Name":
      case "City":
        setErrors(!/^[A-Za-z\s-]*$/.test(inputValue));
        break;
      // case "Email":
      //   setErrors(
      //     !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)
      //   );
      //   break;
      case "State":
        setErrors(!/^[A-Za-z]{2}$/.test(inputValue));
        break;
      case "Zip Code":
        setErrors(!/^\d+$/.test(inputValue));
        break;
      default:
        setErrors(false); // No validation by default
        break;
    }
  };

  // on blur handling
  const handleInputBlur = (e) => {
    const inputValue = e.target.value;
    switch (props.name) {
      case "First Name":
      case "Last Name":
      case "City":
        setErrors(!/^[A-Za-z\s-]*$/.test(inputValue));
        break;
      case "Address Line 1":
        setErrors(!/^\d{1,5}[-\s]?\w*\.?\s[A-Za-z0-9\s#-]+$/i.test(inputValue));
        break;
      case "Address Line 2":
        setErrors(!/^[A-Za-z0-9\s#-.]*$/.test(inputValue));
        break;
      case "Email":
        setErrors(
          !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputValue),
        );
        break;
      default:
        setErrors(false); // No validation by default
        break;
    }
  };

  return (
    <div className={styles["formInput"]} onChange={handleInputChange}>
      <section className={styles["section-1"]}>
        <label>{props.name}</label>
        <input
          name={props.name}
          placeholder={props.placeholder}
          onChange={handleValueChange}
          maxLength={props.name === "Zip Code" ? 5 : undefined}
          onBlur={handleInputBlur}
        />
      </section>
      <section className={styles["section-2"]}>
        {errors && (
          <p>Incorrect input. Please enter your {props.name.toLowerCase()}.</p>
        )}
      </section>
    </div>
  );
};

export default FormInput;

// error: work on address lines
