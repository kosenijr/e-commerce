import React, { useState } from "react";
import styles from "../styles/State.module.css";

const log = console.log;

// set up component
const State = () => {
  // set state
  const [selectedState, setSelectedState] = useState("");

  // set up geographic array
  const geoUS = [
    "New York",
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "U.S. Virgin Islands",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  // log(geoUS);

  // set up change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <label htmlFor="stateDropdown">State or Territory</label>
      <select
        id="stateDropdown"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option className={styles["option-drop"]} value="" type="text">Select ...</option>
        {geoUS.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default State;
