

import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
