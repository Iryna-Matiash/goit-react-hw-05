// import { Suspense, useEffect, useRef, useState } from "react";
// import {
//   NavLink,
//   Outlet,
//   useParams,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import { fetchMoviesById } from "../../components/moviesService";
// import css from "./MovieDetailsPage.module.css";

// export default function MovieDetailsPage() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const location = useLocation();

//   const backLinkHref = useRef(location.state);

//   useEffect(() => {
//     async function getDetail() {
//       try {
//         setIsLoading(true);
//         setError(false);
//         const data = await fetchMoviesById(movieId);
//         console.log(data);
//         setMovie(data);
//       } catch {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getDetail();
//   }, [movieId]);
//   return (
//     <>
//       <Link to={backLinkHref.current}>Go back</Link>

//       {isLoading && <div>Loading movie...</div>}
//       {error && <div>There was an error, please reload this page...</div>}
//       {movie && (
//         <div className={css.container}>
//           <div className={css.mainInfo}>
//             <div className={css.movieFotoInfo}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
//                 alt={movie.original_title}
//                 className={css.movieFoto}
//               />
//             </div>
//             <div className={css.movieInfo}>
//               <h2 className={css.title}>{movie.title}</h2>
//               <p className={css.userScore}>{`User Score ${
//                 Math.round(movie.vote_average * 10) + "% "
//               }`}</p>
//               <h3 className={css.secondaryTitle}>Overwiev</h3>
//               <p className={css.overview}>{movie.overview}</p>
//               <h3>Genres</h3>
//               <ul className={css.genresList}>
//                 {movie.genres.map((el) => (
//                   <li key={el.id}>{el.name}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className={css.addInfo}>
//             <h3>Additional Information</h3>
//             <ul className={css.list}>
//               <li>
//                 <NavLink to="cast">Cast</NavLink>
//               </li>
//               <li>
//                 <NavLink to="reviews">Reviews</NavLink>
//               </li>
//             </ul>

//             <Suspense fallback={<p>Loading Casts or Reviews...</p>}>
//               <Outlet />
//             </Suspense>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// import { useEffect, useState } from 'react';
// import { useParams, Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import tmdb from '../../services/tmdbAPI';
// import MovieCast from '../../components/MovieCast/MovieCast';
// import MovieReviews from '../../components/MovieReviews/MovieReviews';

// function MovieDetailsPage() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     tmdb.get(`/movie/${movieId}`)
//       .then(response => setMovie(response.data))
//       .catch(error => console.error(error));
//   }, [movieId]);

//   const handleGoBack = () => {
//     navigate(location.state?.from || '/movies');
//   };

//   if (!movie) return <div>Завантаження...</div>;

//   return (
//     <div>
//       <button onClick={handleGoBack}>Назад</button>
//       <h2>{movie.title}</h2>
//       <p>{movie.overview}</p>
//       <ul>
//         <li>
//           <Link to="cast" state={{ from: location.state?.from }}>Актори</Link>
//         </li>
//         <li>
//           <Link to="reviews" state={{ from: location.state?.from }}>Відгуки</Link>
//         </li>
//       </ul>
//       <Routes>
//         <Route path="cast" element={<MovieCast />} />
//         <Route path="reviews" element={<MovieReviews />} />
//       </Routes>
//     </div>
//   );
// }

// export default MovieDetailsPage;







// import { useEffect, useState } from 'react';
// import { useParams, Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import tmdb from '../../services/tmdbAPI';
// import MovieCast from '../../components/MovieCast/MovieCast';
// import MovieReviews from '../../components/MovieReviews/MovieReviews';

// function MovieDetailsPage() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     tmdb.get(`/movie/${movieId}`)
//       .then(response => setMovie(response.data))
//       .catch(error => console.error(error));
//   }, [movieId]);

//   const handleGoBack = () => {
//     navigate(location.state?.from || '/movies');
//   };

//   if (!movie) return <div>Завантаження...</div>;

//   const imageUrl = movie.poster_path
//     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//     : 'https://via.placeholder.com/500x750?text=No+Image';

//   return (
//     <div>
//       <button onClick={handleGoBack}>Назад</button>

//       <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
//         <img src={imageUrl} alt={movie.title} width="250" />
//         <div>
//           <h2>{movie.title}</h2>
//           <p>{movie.overview}</p>
//         </div>
//       </div>

//       <ul>
//         <li>
//           <Link to="cast" state={{ from: location.state?.from }}>Актори</Link>
//         </li>
//         <li>
//           <Link to="reviews" state={{ from: location.state?.from }}>Відгуки</Link>
//         </li>
//       </ul>

//       <Routes>
//         <Route path="cast" element={<MovieCast />} />
//         <Route path="reviews" element={<MovieReviews />} />
//       </Routes>
//     </div>
//   );
// }

// export default MovieDetailsPage;



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
