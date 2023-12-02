import React, { useEffect, useState } from "react";

const log = console.log;

// get useEffect for fetch api
// log(process.env.REACT_APP_BASIC_URL, process.env.REACT_APP_SUBSCRIPTION_KEY);

const Client = () => {
  const [details, setDetails] = useState({});

  // useEffect(() => {
    // check fetch url to standard url.
  //   const fetchData = fetch("https://ttzswd-5000.csb.app")
  //     .then((res) => res.json())
  //     .then((data) => log(data))
  //     .catch((err) => console.error(`Error: ${err}`));
  // }, []);

  return (
  <p>Hey</p>
  )
};

export default Client;
