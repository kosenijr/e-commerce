import React, { useState } from "react";
import FormInput from "./FormInput";
import PhoneNumberInput from "./PhoneNumberInput";
import styles from "../styles/Form.module.css";

const log = console.log;

const Form = ({
  onErrors,
  onFormDisplay,
  onHandleErrors,
  onHandleSubmit,
  onSubmit,
}) => {
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

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleInputChange = (fieldName, isError) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: isError,
    }));
    onHandleErrors(Object.values(errors).some((error) => error));
  };

  // const handleValues = (fieldName, e) => {
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     [fieldName]: e.target.value,
  //   }));
  // };

  const handleValues = (fieldName, e) => {
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
    log(`Field ${fieldName} value:`, value); // Log the value after it's updated
  };

  // are all values entered/has there been any errors
  const areAllValuesEntered = Object.values(values).every(
    (value) => value.trim() !== "",
  );

  log(values);

  const hasAnyErrors = Object.values(errors).some((error) => error);

  // log(`areAllValuesEntered: ${!areAllValuesEntered}, hasAnyErrors: ${hasAnyErrors}`);

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
          value={values.firstName}
          handleInputChange={(inputValue) =>
            handleValues("firstName", inputValue)
          }
          setErrors={(isError) => handleInputChange("firstName", isError)}
          errors={errors.firstName}
        />

        <FormInput
          name="Last Name"
          placeholder="Doe"
          value={values.lastName}
          setErrors={(isError) => handleInputChange("lastName", isError)}
          errors={errors.lastName}
        />

        <FormInput
          name="Email"
          placeholder="john.doe@example.com"
          value={values.email}
          setErrors={(isError) => handleInputChange("email", isError)}
          errors={errors.email}
        />

        <PhoneNumberInput />

        <FormInput
          name="Address Line 1"
          placeholder="123 Main Street"
          value={values.addressLine1}
          setErrors={(isError) => handleInputChange("addressLine1", isError)}
          errors={errors.addressLine1}
        />

        <FormInput
          name="Address Line 2"
          placeholder="Apt #305"
          value={values.addressLine2}
          setErrors={(isError) => handleInputChange("addressLine2", isError)}
          errors={errors.addressLine2}
        />

        <FormInput
          name="City"
          placeholder="Anytown"
          value={values.city}
          setErrors={(isError) => handleInputChange("city", isError)}
          errors={errors.city}
        />

        <FormInput
          name="State"
          placeholder="CA"
          value={values.state}
          setErrors={(isError) => handleInputChange("state", isError)}
          errors={errors.state}
        />

        <FormInput
          name="Zip Code"
          placeholder="12345"
          value={values.zipCode}
          setErrors={(isError) => handleInputChange("zipCode", isError)}
          errors={errors.zipCode}
        />

        {/* button */}
        <button
          className={styles["submit-button"]}
          type="submit"
          disabled={!areAllValuesEntered || hasAnyErrors}
          onClick={onHandleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
