

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdb from '../../services/tmdbAPI';
import styles from './MovieCast.module.css';


function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    tmdb.get(`/movie/${movieId}/credits`)
      .then(response => setCast(response.data.cast))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => {
        const imgUrl = actor.profile_path
          ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
          : 'https://via.placeholder.com/200x300?text=No+Photo';

        return (
          <li key={actor.id} style={{ marginBottom: '20px' }}>
            <img src={imgUrl} alt={actor.name} width="120" />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieCast;
