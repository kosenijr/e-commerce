import React, { useState } from "react";
import styles from "../styles/State.module.css";

const log = console.log;

// set up component
const State = () => {
  // set state
  const [selectedState, setSelectedState] = useState("");

  // set up geographic array
  const geoUS = [
    "NY",
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MP",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "VI",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  // log(geoUS);

  // set up change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <section className={styles["section-1"]}>
        <label htmlFor="stateDropdown">State or Territory</label>
        <select
          id="stateDropdown"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option className={styles["option-drop"]} value="">
            Select ...
          </option>
          {geoUS.map((state, index) => (
            <option
              className={styles["option-state"]}
              key={index}
              value={state}
            >
              {state}
            </option>
          ))}
        </select>
      </section>

      <section className={styles["section-2"]}>
        {onError && (
          <p>Incorrect input. Please enter your phone number.</p>
        )}
        {/* <p>Incorrect input. Please enter a proper {props.value}.</p> */}
      </section>
    </div>
  );
};

export default State;
