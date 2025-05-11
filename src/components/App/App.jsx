//import { useState } from "react";//
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
//import HomePage from "../../pages/HomePage";
//import MoviesPage from "../../pages/MoviesPage/MoviesPage";
//import NotFoundPage from "../../pages/NotFoundPage";
//import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
//import MovieCast from "../MovieCast/MovieCast";
//import MovieReviews from "../MovieReviews/MovieReviews";
import { lazy, Suspense } from "react";

const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
