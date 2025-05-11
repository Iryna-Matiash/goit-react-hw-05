import axios from "axios";

export const fetchMovies = async () => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzIwN2QyMDNhYmQ0NjIzOTNmYzc3YjA1YzgxMzM5YSIsIm5iZiI6MTc0MjMxNjc2OS44NjgsInN1YiI6IjY3ZDlhNGUxNWU5N2Y3M2U5OWJiNDc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lUdtnk3Fzs2rzyEasmpkM-VdD7PzcOt161812AFT6EA",
    },
  };

  const resp = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=3c207d203abd462393fc77b05c81339a&include_adult=false&language=en-US&page=1",
    options
  );
  return resp.data.results;
};

export const fetchMoviesById = async (movieId) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzIwN2QyMDNhYmQ0NjIzOTNmYzc3YjA1YzgxMzM5YSIsIm5iZiI6MTc0MjMxNjc2OS44NjgsInN1YiI6IjY3ZDlhNGUxNWU5N2Y3M2U5OWJiNDc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lUdtnk3Fzs2rzyEasmpkM-VdD7PzcOt161812AFT6EA",
    },
  };
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return resp.data;
};

export const fetchMovieCast = async (movieId) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzIwN2QyMDNhYmQ0NjIzOTNmYzc3YjA1YzgxMzM5YSIsIm5iZiI6MTc0MjMxNjc2OS44NjgsInN1YiI6IjY3ZDlhNGUxNWU5N2Y3M2U5OWJiNDc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lUdtnk3Fzs2rzyEasmpkM-VdD7PzcOt161812AFT6EA",
    },
  };

  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return resp.data.cast;
};

export const fetchMovieReview = async (movieId) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzIwN2QyMDNhYmQ0NjIzOTNmYzc3YjA1YzgxMzM5YSIsIm5iZiI6MTc0MjMxNjc2OS44NjgsInN1YiI6IjY3ZDlhNGUxNWU5N2Y3M2U5OWJiNDc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lUdtnk3Fzs2rzyEasmpkM-VdD7PzcOt161812AFT6EA",
    },
  };

  const resp = await axios.get(
    `
https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return resp.data.results;
};

export const fetchSearchMovie = async (querry) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzIwN2QyMDNhYmQ0NjIzOTNmYzc3YjA1YzgxMzM5YSIsIm5iZiI6MTc0MjMxNjc2OS44NjgsInN1YiI6IjY3ZDlhNGUxNWU5N2Y3M2U5OWJiNDc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lUdtnk3Fzs2rzyEasmpkM-VdD7PzcOt161812AFT6EA",
    },
  };

  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=3c207d203abd462393fc77b05c81339a&include_adult=false&language=en-US&page=1&query=${querry}`,
    options
  );

  return resp.data.results;
};
