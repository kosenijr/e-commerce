import React from "react";
import FormInput from "./FormInput";
import styles from "../styles/Form.module.css";

const Form = ({ onFormDisplay, onHandleSubmit, onSubmit }) => {
  
  return (
    <div className={`${styles["form-container"]} ${styles[onFormDisplay ? "form-on" : "form-off"]} ${styles[onSubmit ? "form-off" : "form-on"]}`}>
      <form className={styles["user-form"]}>
        {/* form fields */}
        <FormInput placeholder="First Name" />
        <FormInput placeholder="Last Name" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Phone" />
        <FormInput placeholder="Address Line 1" />
        <FormInput placeholder="Address Line 2" />
        <FormInput placeholder="City" />
        <FormInput placeholder="State" />
        <FormInput placeholder="ZIP Code" />
        {/* button */}
          <button className={styles["submit-button"]} type="submit" onClick={onHandleSubmit} >
            Submit
          </button>
      </form>
    </div>
  );
};

export default Form;
