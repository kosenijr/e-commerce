import React, { useState } from "react";

const PhoneNumberInput = () => {
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
  };

  return (
    <div>
      <label>Phone Number</label>
      <input
        name="Phone Number"
        type="text"
        placeholder="(123) 456-7890"
        value={phoneNumber}
        onChange={handleNumberChange}
      />
    </div>
  );
};

export default PhoneNumberInput;
