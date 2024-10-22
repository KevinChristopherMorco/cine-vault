import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieApi from "../../../hooks/axios/useMovieApi";
import useReviewFilter from "../../../hooks/movie-reviews/useReviewFilter";

import MovieReviewHeading from "./MovieReviewHeading";
import MovieReviewFilter from "./MovieReviewFilter";
import MovieReviews from "./MovieReviews";

const MovieReviewContainer = () => {
  const { movieData, isLoading, handleSpecificEndpoint } = useMovieApi();
  const { movieID } = useParams();

  const {
    filter,
    order,
    handleFilterChange,
    handleSortChange,
    handleOrderChange,
    handleSort,
  } = useReviewFilter();

  useEffect(() => {
    handleSpecificEndpoint(movieID);
  }, [movieID]);

  if (isLoading) return;

  return (
    <div className="flex w-full flex-col gap-10 px-4 py-2 lg:grid lg:grid-cols-[2fr_1fr]">
      <MovieReviewHeading movieData={movieData} isLoading={isLoading} />
      <MovieReviewFilter
        order={order}
        handleFilterChange={handleFilterChange}
        handleSortChange={handleSortChange}
        handleOrderChange={handleOrderChange}
      />
      <MovieReviews
        movieData={movieData}
        isLoading={isLoading}
        filter={filter}
        handleSort={handleSort}
      />
    </div>
  );
};

export default MovieReviewContainer;
