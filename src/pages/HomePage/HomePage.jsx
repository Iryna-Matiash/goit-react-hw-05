

import { useEffect, useState } from 'react';
import tmdb from '../../services/tmdbAPI';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdb
      .get('/trending/movie/day')
      .then(response => setMovies(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Trending today</h1>
      <MovieList movies={movies} listClass={styles.list} />
    </div>
  );
};

export default HomePage;

