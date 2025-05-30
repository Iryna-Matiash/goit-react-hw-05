

import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import tmdb from '../../services/tmdbAPI';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.query.value.trim();
    if (!searchQuery) return;
    setSearchParams({ query: searchQuery });

    const res = await tmdb.get('/search/movie', { params: { query: searchQuery } });
    setMovies(res.data.results);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input name="query" defaultValue={query} className={styles.searchInput} />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
