import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../moviesService";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieCast(movieId);
        setCasts(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [movieId]);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>There was an error, please reload this page...</div>}
      {casts.length > 0 &&
        casts.map((cast) => (
          <div key={cast.id} className={css.container}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt={cast.original_name}
              className={css.movieFoto}
            />
            <p className={css.name}>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        ))}
    </>
  );
}
