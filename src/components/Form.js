import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import FormInput from "./FormInput";
import PhoneNumberInput from "./PhoneNumberInput";
import State from "./State";

const log = console.log;

const Form = ({ onFormDisplay, onHandleErrors, onSubmit, onHandleSubmit }) => {
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
    "First Name": "",
    "Last Name": "",
    Email: "",
    "Phone Number": "",
    "Address Line 1": "",
    "Address Line 2": "",
    City: "",
    State: "Select",
    "Zip Code": "",
  });

  const handleErrorChange = (fieldName, isError) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: isError,
    }));
  };

  const handleStateChange = (state) => {
    handleValueChange({ target: { name: "State", value: state } });
    onHandleErrors(Object.values(errors).some((error) => error));
  };

  const handleValueChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    // log(`Field ${e.target.name} changed to: ${e.target.value}`);
  };

  // are values entered?
  const areAllValuesEntered = Object.values(values).every(
    (value) => value.trim() !== ""
  );

  // is there a selected U.S. State?
  const isStateSelected = values["State"] !== "Select";

  // disable submit button?
  const shouldDisableSubmit =
    !areAllValuesEntered ||
    Object.values(errors).some((error) => error) ||
    !isStateSelected;

  log(values);

  log(`
  All Values Entered:${areAllValuesEntered},
  Any Errors: ${Object.values(errors).some((error) => error)},
  Was a state selected: ${isStateSelected},
  `);

  return (
    <div
      className={`${styles["form-container"]} ${
        styles[onFormDisplay ? "form-on" : "form-off"]
      } ${styles[onSubmit ? "form-off" : "form-on"]}`}
    >
      <form className={styles["user-form"]}>
        {/* form fields */}

        {/* first name */}
        <FormInput
          name="First Name"
          placeholder="John"
          handleValueChange={(e) => handleValueChange(e)}
          value={values["First Name"]}
          setErrors={(isError) => handleErrorChange("firstName", isError)}
          errors={errors.firstName}
        />
        {/* last name */}
        <FormInput
          name="Last Name"
          placeholder="Doe"
          handleValueChange={(e) => handleValueChange(e)}
          value={values["Last Name"]}
          setErrors={(isError) => handleErrorChange("lastName", isError)}
          errors={errors.lastName}
        />

        {/* email */}
        <FormInput
          name="Email"
          placeholder="john.doe@example.com"
          handleValueChange={(e) => handleValueChange(e)}
          value={values["Email"]}
          setErrors={(isError) => handleErrorChange("email", isError)}
          errors={errors.email}
        />

        {/* phone number */}
        <PhoneNumberInput
          name="Phone Number"
          handleValueChange={(e) => handleValueChange(e)}
          value={values["Phone Number"]}
          errors={errors.phoneNumber}
          setErrors={(isError) => handleErrorChange("phoneNumber", isError)}
        />

        {/* address line 1 */}
        <FormInput
          name="Address Line 1"
          placeholder="123 Main Street"
          handleValueChange={(e) => handleValueChange(e)}
          value={values["Address Line 1"]}
          setErrors={(isError) => handleErrorChange("addressLine1", isError)}
          errors={errors.addressLine1}
        />

        {/* address line 2 */}
        <FormInput
          name="Address Line 2"
          placeholder="Apt #305"
          handleValueChange={(e) => handleValueChange(e)}
          value={values["Address Line 2"]}
          setErrors={(isError) => handleErrorChange("addressLine2", isError)}
          errors={errors.addressLine2}
        />

        {/* city */}
        <FormInput
          name="City"
          placeholder="Anytown"
          handleValueChange={(e) => handleValueChange(e)}
          value={values["City"]}
          setErrors={(isError) => handleErrorChange("city", isError)}
          errors={errors.city}
        />

        {/* state */}
        <State
          name="State"
          value={values["State"]}
          errors={errors.state}
          setErrors={(isError) => handleErrorChange("state", isError)}
          handleStateChange={handleStateChange}
        />

        {/* zip code */}
        <FormInput
          name="Zip Code"
          placeholder="12345"
          handleValueChange={(e) => handleValueChange(e)}
          value={values["Zip Code"]}
          setErrors={(isError) => handleErrorChange("zipCode", isError)}
          errors={errors.zipCode}
        />

        {/* button */}
        <button
          className={styles["submit-button"]}
          type="submit"
          onClick={onHandleSubmit}
          disabled={shouldDisableSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
