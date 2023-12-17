import React from "react";
import FormInput from "./FormInput";
import styles from "../styles/Form.module.css";

const Form = ({ onFormDisplay, onHandleSubmit, onSubmit }) => {
  return (
    <div
      className={`${styles["form-container"]} ${
        styles[onFormDisplay ? "form-on" : "form-off"]
      } ${styles[onSubmit ? "form-off" : "form-on"]}`}
    >
      <form className={styles["user-form"]}>
        {/* form fields */}
        <label>First Name</label>
        <FormInput placeholder="John" />
        <label>Last Name</label>
        <FormInput placeholder="Doe" />
        <label>Email</label>
        <FormInput placeholder="john.doe@example.com" />
        <label>Phone Number</label>
        <FormInput placeholder="(555) 123-4567" />
        <label>Address Line 1</label>
        <FormInput placeholder="123 Main Street" />
        <label>Address Line 2</label>
        <FormInput placeholder="Apt #305" />
        <label>City</label>
        <FormInput placeholder="Anytown" />
        <label>State</label>
        <FormInput placeholder="CA" />
        <label>Zip Code</label>
        <FormInput placeholder="12345" />
        {/* button */}
        <button
          className={styles["submit-button"]}
          type="submit"
          onClick={onHandleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
