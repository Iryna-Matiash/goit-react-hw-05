// import { useEffect, useState } from "react";
// import { fetchMovies } from "../components/moviesService";
// import MovieList from "../components/MovieList/MovieList";

// export default function HomePage() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function getMovies() {
//       try {
//         setIsLoading(true);
//         setError(false);
//         const data = await fetchMovies();

//         setMovies(data);
//       } catch {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getMovies();
//   }, []);

//   return (
//     <>
//       <h1>Trending Today</h1>
//       {isLoading && <div>Loading movies...</div>}
//       {error && <div>There was an error, please reload this page...</div>}
//       {movies.length > 0 && <MovieList movies={movies} />}
//     </>
//   );
// }


import { useEffect, useState } from 'react';
import tmdb from '../../services/tmdbAPI';
import MovieList from '../../components/MovieList/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdb.get('/trending/movie/day')
      .then(response => setMovies(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Популярні фільми</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
