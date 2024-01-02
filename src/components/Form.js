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
    zipCode: false,
  });

  const handleInputChange = (fieldName, isError) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: isError,
    }));
  };

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
          setError={(isError) => handleInputChange("firstName", isError)}
          error={errors.firstName}
        />

        <FormInput
          name="Last Name"
          placeholder="Doe"
          value="lastName"
          setError={(isError) => handleInputChange("lastName", isError)}
          error={errors.lastName}
        />

        <FormInput
          name="Email"
          placeholder="john.doe@example.com"
          value="email"
          setError={(isError) => handleInputChange("email", isError)}
          error={errors.email}
        />

        <PhoneNumberInput />

        <FormInput
          name="Address Line 1"
          placeholder="123 Main Street"
          value="addressLine1"
          setError={(isError) => handleInputChange("addressLine1", isError)}
          error={errors.addressLine1}
        />

        <FormInput
          name="Address Line 2"
          placeholder="Apt #305"
          value="addressLine2"
          setError={(isError) => handleInputChange("addressLine2", isError)}
          error={errors.addressLine2}
        />

        <FormInput
          name="City"
          placeholder="Anytown"
          value="city"
          setError={(isError) => handleInputChange("city", isError)}
          error={errors.city}
        />

        <FormInput
          name="State"
          placeholder="CA"
          value="state"
          setError={(isError) => handleInputChange("state", isError)}
          error={errors.state}
        />

        <FormInput
          name="Zip Code"
          placeholder="12345"
          value="zipCode"
          setError={(isError) => handleInputChange("zipCode", isError)}
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
