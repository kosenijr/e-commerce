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
        <FormInput name="First Name" placeholder="John" />
        <FormInput name="Last Name" placeholder="Doe" />
        <FormInput name="Email" placeholder="john.doe@example.com" />
        <FormInput name="Phone Number" placeholder="(555) 123-4567" />
        <FormInput name="Address Line 1" placeholder="123 Main Street" />
        <FormInput name="Address Line 2" placeholder="Apt #305" />
        <FormInput name="City" placeholder="Anytown" />
        <FormInput name="State" placeholder="CA" />
        <FormInput name="Zip Code" placeholder="12345" />
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
