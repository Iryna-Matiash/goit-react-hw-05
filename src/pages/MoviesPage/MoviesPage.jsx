import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import tmdb from '../../services/tmdbAPI';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      try {
        const response = await tmdb.get('/search/movie', {
          params: { query },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Помилка при завантаженні фільмів:', error);
      }
    }

    fetchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (value) setSearchParams({ query: value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input name="query" defaultValue={query} className={styles.searchInput} />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>

      <MovieList movies={movies} listClass={styles.list} />
    </div>
  );
};

export default MoviesPage;

