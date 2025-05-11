import css from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { fetchMovieReview } from "../moviesService";
import { useParams } from "react-router-dom";
import { LiaPenSolid } from "react-icons/lia";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieReview(movieId);

        setReviews(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>There was an error, please reload this page...</div>}
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className={css.container}>
            <h2>
              <LiaPenSolid />
              {`Author: ${review.author}`}
            </h2>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p className={css.absence}>
          We do not have any reviews for this movie...
        </p>
      )}
    </>
  );
}
