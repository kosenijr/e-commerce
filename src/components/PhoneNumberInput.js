import React, { useState } from "react";
import styles from "../styles/PhoneNumberInput.module.css";

const PhoneNumberInput = (props) => {
  const { errors, setErrors, value, handleValueChange } = props;
  const [phoneNumber, setPhoneNumber] = useState(value);

  const formatPhoneNumber = (input) => {
    const numericInput = input.replace(/\D/g, "");

    // If the number starts with '1', omit it
    const cleanedNumber = numericInput.startsWith("1")
      ? numericInput.slice(1)
      : numericInput;

    const formattedNumber = cleanedNumber.replace(
      /(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3"
    );
    return formattedNumber;
  };

  const handleInputChange = (e) => {
    if (e.target.value.length < 10) {
      setErrors(true);
    } else {
      setErrors(false);
    }
  };

  const handleNumberChange = (e) => {
    const input = e.target.value;

    const formattedNumber = formatPhoneNumber(input);
    //  update with formatted number
    setPhoneNumber(formattedNumber);
    handleValueChange({ target: { name: "Phone Number", value: input } });
  };

  return (
    <div onBlur={handleInputChange}>
      <section className={styles["section-1"]}>
        <label>Phone Number</label>
        <input
          name="Phone Number"
          onChange={handleNumberChange}
          placeholder="(555) 555-5555"
          value={phoneNumber}
          maxLength="14"
          required="This is required."
        />
      </section>
      <section className={styles["section-2"]}>
        {errors && (
          <p>{`Please enter your ${props.name.toLowerCase()}.`}</p>
        )}
      </section>
    </div>
  );
};
export default PhoneNumberInput;
