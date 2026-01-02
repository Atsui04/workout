import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const getLinkClass = ({ isActive }) =>
    `${styles.linkItem} ${isActive ? styles.active : ""}`;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/home" className={getLinkClass}>
          <img
            className={styles.logo}
            src="../src/assets/logo/MyWorkout-logo-transparent-v2.png"
            alt="MyWorkout logo"
          />
        </NavLink>

        <div className={styles.links}>
          <NavLink to="/" className={getLinkClass}>
            Schedule
          </NavLink>
          <NavLink to="/plan" className={getLinkClass}>
            Plan
          </NavLink>
          <NavLink to="/archive" className={getLinkClass}>
            Archive
          </NavLink>
          <NavLink to="/profile" className={getLinkClass}>
            Profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
