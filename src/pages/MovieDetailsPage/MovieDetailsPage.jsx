
import { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import tmdb from '../../services/tmdbAPI';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    tmdb.get(`/movie/${movieId}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from || '/movies');
  };

  if (!movie) return <div>Завантаження...</div>;

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A';
  const genreNames = movie.genres?.map(genre => genre.name).join(', ');

  return (
    <div className={styles.container}>
      <button onClick={handleGoBack} className={styles.backButton}>Go back</button>

      <div className={styles.movieDetailsWrapper}>
        <img src={imageUrl} alt={movie.title} className={styles.poster} />
        <div className={styles.infoBlock}>
          <h2 className={styles.title}>{movie.title} ({releaseYear})</h2>
          <p className={styles.overview}>{movie.overview}</p>
          <p className={styles.genres}><strong>Genres:</strong> {genreNames}</p>
        </div>
      </div>

      <ul className={styles.subnav}>
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
}

export default MovieDetailsPage;
