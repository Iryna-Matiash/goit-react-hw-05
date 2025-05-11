import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../components/moviesService";
// import css from './MoviesPage.module.css'
import MovieList from "../../components/MovieList/MovieList";
import { useDebounce } from "use-debounce";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [subMovie, setSubmovie] = useState("");

  const query = searchParams.get("query") ?? "";

  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchtext = (event) => {
    setSubmovie(event.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const nextParams = new URLSearchParams(searchParams);

    if (subMovie !== "") {
      nextParams.set("query", subMovie);
    } else {
      nextParams.delete("query");
    }

    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function getSearchMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchSearchMovie(debouncedQuery);
        console.log(data);
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMovie();
  }, [debouncedQuery]);

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="search"
          value={subMovie}
          onChange={changeSearchtext}
          className={css.searchInput}
        />
        <button type="submit" className={css.sbmButton}>
          Login
        </button>
      </form>

      {isLoading && <div>Loading...</div>}
      {error && <div>There was an error, please reload this page...</div>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
