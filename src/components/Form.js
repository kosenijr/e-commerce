import React, { useState } from "react";
import FormInput from "./FormInput";
import PhoneNumberInput from "./PhoneNumberInput";
import styles from "../styles/Form.module.css";

const Form = ({ onFormDisplay, onHandleSubmit, onSubmit }) => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    addressLine1: false,
    addressLine2: false,
    city: false,
    state: false,
    zipCode: false
  })

  return (
    <div
      className={`${styles["form-container"]} ${
        styles[onFormDisplay ? "form-on" : "form-off"]
      } ${styles[onSubmit ? "form-off" : "form-on"]}`}
    >
      <form className={styles["user-form"]}>
        {/* form fields */}

        <FormInput
          name="First Name"
          placeholder="John"
          value="firstName"
          setError={setError}
          error={errors.firstName}
        />

        <FormInput
          name="Last Name"
          placeholder="Doe"
          value="lastName"
          setError={setError}
          error={errors.lastName}
        />

        <FormInput
          name="Email"
          placeholder="john.doe@example.com"
          value="email"
          setError={setError}
          error={errors.email}
        />

        <PhoneNumberInput />

        <FormInput
          name="Address Line 1"
          placeholder="123 Main Street"
          value="addressLine1"
          setError={setError}
          error={errors.addressLine1}
        />

        <FormInput
          name="Address Line 2"
          placeholder="Apt #305"
          value="addressLine2"
          setError={setError}
          error={errors.addressLine2}
        />

        <FormInput
          name="City"
          placeholder="Anytown"
          value="city"
          setError={setError}
          error={errors.city}
        />

        <FormInput
          name="State"
          placeholder="CA"
          value="state"
          setError={setError}
          error={errors.state}
        />

        <FormInput
          name="Zip Code"
          placeholder="12345"
          value="zipCode"
          setError={setError}
          error={errors.zipCode}
        />

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
