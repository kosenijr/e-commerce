import Logo from "./Logo";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles["nav-container"]}>
      <Logo />
    </header>
  );
};

export default Navbar;
