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

import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Головна</NavLink>
      <NavLink to="/movies">Пошук фільмів</NavLink>
    </nav>
  );
}

export default Navigation;
