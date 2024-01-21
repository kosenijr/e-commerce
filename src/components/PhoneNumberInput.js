import React, { useState } from "react";
import styles from "../styles/PhoneNumberInput.module.css";

const log = console.log;

const PhoneNumberInput = (props) => {
  const { errors, setErrors } = props;
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (input) => {
    const numericInput = input.replace(/\D/g, "");

    const formattedNumber = numericInput.replace(
      /^1?(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3",
    );
    return formattedNumber;
  };

  const handleNumberChange = (e) => {
    const input = e.target.value;

    // regular expressions
    const addOne = /^1\d{10}$/;
    const doNotAddOne = /^\d{10}$/;

    // check conditions and update state
    if (input.startsWith("1") && addOne.test(input)) {
      setPhoneNumber(input.slice(0, 11));
    } else if (!input.startsWith("1") && doNotAddOne.test(input)) {
      setPhoneNumber(input.slice(0, 10));

      const formattedNumber = formatPhoneNumber(input);
      //  update with formatted number
      setPhoneNumber(formattedNumber);
    }

    return (
      <div>
        <section className={styles["section-1"]}>
          <label>Phone Number</label>
          <input
            name="Phone Number"
            onChange={handleNumberChange}
            placeholder="(123) 456-7890"
            value={phoneNumber}
          />
        </section>
        <section className={styles["section-2"]}>
          {errors && (
            <p>
              Incorrect input. Please enter your {props.name.toLowerCase()}.
            </p>
          )}
        </section>
      </div>
    );
  };
};
export default PhoneNumberInput;
