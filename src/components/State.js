import React from "react";
import styles from "../styles/State.module.css";

// set up component
const State = (props) => {
  // update props
  const { errors, handleStateChange } = props;

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

  // log(props);

  return (
    <div>
      <section className={styles["section-1"]}>
        <label htmlFor="stateDropdown">State or Territory</label>
        <select
          id="stateDropdown"
          value={props.value}
          onChange={(e) => handleStateChange(e.target.value)}
          required="This is required."
        >
          <option className={styles["option-drop"]}>Select</option>
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
        {errors && <p>{`Please select your ${props.name.toLowerCase()}.`}</p>}
      </section>
    </div>
  );
};

export default State;
