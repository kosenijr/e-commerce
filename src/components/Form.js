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
        <FormInput name="First Name" placeholder="John" value="firstName" />
        <FormInput name="Last Name" placeholder="Doe" value="lastName" />
        <FormInput name="Email" placeholder="john.doe@example.com" value="email" />
        <FormInput name="Phone Number" placeholder="(555) 123-4567" value="phoneNumber" />
        <FormInput name="Address Line 1" placeholder="123 Main Street" value="addressLine1" />
        <FormInput name="Address Line 2" placeholder="Apt #305" value="addressLine2" />
        <FormInput name="City" placeholder="Anytown" value="city" />
        <FormInput name="State" placeholder="CA" value="state" />
        <FormInput name="Zip Code" placeholder="12345" value="zipCode" />
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
