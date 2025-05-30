

import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies, listClass = '' }) {
  const location = useLocation();

  return (
    <ul className={listClass}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

