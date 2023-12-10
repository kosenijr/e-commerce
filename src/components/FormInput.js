import React, { useState } from "react";
import styles from "../styles/FormInput.module.css";


const FormInput = (props) => {

  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input placeholder={props.placeholder}/> 
    </div>
  );
};

export default FormInput;
