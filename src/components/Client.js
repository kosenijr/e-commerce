import React, { useEffect, useState } from 'react';
import styles from "../styles/Client.module.css";

const Client = () => {
  const log = console.log;
  log("log is working")

  const [info, setInfo] = useState({
    todayDate: "",
    todayMessage: "",
    todayAlert: "",
    tomorrowDate: "",
    tomorrowMessage: "",
    tomorrowAlert: "",
  });

  useEffect(() => {
    // check fetch url to standard url.
    const fetchData = async () => {
      try {
        const response = await fetch("/");

        // log(response);
        const result = await response.json();
        setInfo(result);
        // log(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    // log(info);
  }, []);

  log(Object.keys(info), Object.values(info));
  const values = Object.values(info);
  const infoData = {
    todayDate: values[0],
    todayMessage: values[1].details,
    todayAlert: values[1].status,
    tomorrowDate: values[2],
    tomorrowMessage: values[3].details,
    tomorrowAlert: values[3].status,
  };

  log(infoData);

  return (
    <div className={styles["display-container"]}>
      {info && (
        <div>
          <section className={styles["display-section"]}>
            <p>
              Today: {infoData.todayDate}: {infoData.todayAlert}
            </p>
            <p>{infoData.todayMessage}</p>
          </section>
          <section className={styles["display-section"]}>
            <p>
              Tomorrow: {infoData.tomorrowDate}: {infoData.tomorrowAlert}
            </p>
            <p>{infoData.tomorrowMessage}</p>
          </section>
        </div>
      )}
    </div>
  );
};

export default Client;
