import React from "react";
import FormInput from "./FormInput";
import styles from "../styles/Form.module.css";

const Form = () => {
  return (
    <div>
      <form className={styles["form"]}>
        <FormInput placeholder="First Name" />
        <FormInput placeholder="Last Name" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Phone" />
        <FormInput placeholder="Address Line 1" />
        <FormInput placeholder="Address Line 2" />
        <FormInput placeholder="City" />
        <FormInput placeholder="State" />
        <FormInput placeholder="ZIP Code" /> <button> Submit </button>
      </form>
    </div>
  );
};

export default Form;
