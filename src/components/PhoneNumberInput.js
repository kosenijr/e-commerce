import React, { useState } from "react";
import styles from "../styles/PhoneNumberInput.module.css";

const PhoneNumberInput = (errors, setErrors) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (input) => {
    const numericInput = input.replace(/\D/g, "");

    const formattedNumber = numericInput.replace(
      /^1?(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3"
    );
    return formattedNumber;
  };

  const handleNumberChange = (e) => {
    const input = e.target.value;
    const formattedNumber = formatPhoneNumber(input);
    //  update with formatted number
    setPhoneNumber(formattedNumber);
    setErrors(errors);
  };

  return (
    <div>
      <section className={styles["section-1"]}>
        <label>Phone Number</label>
        <input
          name="Phone Number"
          type="text"
          placeholder="(123) 456-7890"
          value={phoneNumber}
          onChange={handleNumberChange}
        />
      </section>

      <section className={styles["section-2"]}>
        {errors && <p>Incorrect input. Please select your state.</p>}
        {/* <p>Incorrect input. Please enter a proper {props.value}.</p> */}
      </section>
    </div>
  );
};

export default PhoneNumberInput;
