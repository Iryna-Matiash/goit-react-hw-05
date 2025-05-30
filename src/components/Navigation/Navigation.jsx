// import { NavLink } from "react-router-dom";
// import css from "./Navigation.module.css";
// import clsx from "clsx";

// const getLinkStyles = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// export default function Navigation() {
//   return (
//     <header className={css.header}>
//       <nav className={css.navigation}>
//         <ul className={css.list}>
//           <li>
//             <NavLink to="/" className={getLinkStyles}>
//               HomePage
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/movies" className={getLinkStyles}>
//               MoviesPage
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// import { NavLink } from 'react-router-dom';

// function Navigation() {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/movies">Movies</NavLink>
//     </nav>
//   );
// }

// export default Navigation;

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
