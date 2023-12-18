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
        <FormInput name="First Name" placeholder="John" value="first name" />
        <FormInput name="Last Name" placeholder="Doe" value="last name" />
        <FormInput name="Email" placeholder="john.doe@example.com" value="email" />
        <FormInput name="Phone Number" placeholder="(555) 123-4567" value="phone number" />
        <FormInput name="Address Line 1" placeholder="123 Main Street" value="address" />
        <FormInput name="Address Line 2" placeholder="Apt #305" value="address" />
        <FormInput name="City" placeholder="Anytown" value="city" />
        <FormInput name="State" placeholder="CA" value="city" />
        <FormInput name="Zip Code" placeholder="12345" value="zip code" />
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
