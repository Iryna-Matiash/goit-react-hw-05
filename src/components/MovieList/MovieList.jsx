import css from "./MovieList.module.css";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.listEl}>
          <NavLink
            to={`/movies/${movie.id}`}
            className={getLinkStyles}
            state={location}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
