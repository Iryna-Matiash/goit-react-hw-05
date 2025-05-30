

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdb from '../../services/tmdbAPI';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    tmdb.get(`/movie/${movieId}/reviews`)
      .then(response => setReviews(response.data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p><strong>{review.author}</strong>: {review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;

