import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import FormInput from "./FormInput";
import PhoneNumberInput from "./PhoneNumberInput";

const log = console.log;

const Form = ({
  onFormDisplay,
  onErrors,
  onHandleErrors,
  onSubmit,
  onHandleSubmit,
}) => {
  // errors within fields
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

  // values within fields
  let [values, setValues] = useState({
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

  const handleErrorChange = (fieldName, isError) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: isError,
    }));
    // for submit button: must connect (hasAnyErrors)
    onHandleErrors(Object.values(errors).some((error) => error));
  };

  const handleValueChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    log(`Field ${e.target.name} changed to: ${e.target.value}`);
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
          handleValueChange={handleValueChange}
          value={values.firstName}
          setErrors={(isError) => handleErrorChange("firstName", isError)}
          errors={errors.firstName}
        />
        <FormInput
          name="Last Name"
          placeholder="Doe"
          value={values.lastName}
          setErrors={(isError) => handleErrorChange("lastName", isError)}
          errors={errors.lastName}
        />
        <FormInput
          name="Email"
          placeholder="john.doe@example.com"
          value={values.email}
          setErrors={(isError) => handleErrorChange("email", isError)}
          errors={errors.email}
        />
        <PhoneNumberInput />
        <FormInput
          name="Address Line 1"
          placeholder="123 Main Street"
          value={values.addressLine1}
          setErrors={(isError) => handleErrorChange("addressLine1", isError)}
          errors={errors.addressLine1}
        />
        <FormInput
          name="Address Line 2"
          placeholder="Apt #305"
          value={values.addressLine2}
          setErrors={(isError) => handleErrorChange("addressLine2", isError)}
          errors={errors.addressLine2}
        />
        <FormInput
          name="City"
          placeholder="Anytown"
          value={values.city}
          setErrors={(isError) => handleErrorChange("city", isError)}
          errors={errors.city}
        />
        <FormInput
          name="State"
          placeholder="CA"
          value={values.state}
          setErrors={(isError) => handleErrorChange("state", isError)}
          errors={errors.state}
        />
        <FormInput
          name="Zip Code"
          placeholder="12345"
          value={values.zipCode}
          setErrors={(isError) => handleErrorChange("zipCode", isError)}
          errors={errors.zipCode}
        />
        {/* button */}
        <button
          className={styles["submit-button"]}
          type="submit"
          // disabled={!areAllValuesEntered || hasAnyErrors}
          onClick={onHandleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
