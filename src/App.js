import React from "react";
import styles from "./styles/App.module.css";
import Landing from "./components/Landing";

function App() {
  return (
    <div className={styles["App"]} id={styles["overlay"]}>
      <Landing />
    </div>
  );
}

export default App;
