import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieApi from "../../../hooks/axios/useMovieApi";

import MoviePhotoDescription from "./MoviePhotoDescription";
import MoviePhotoCarousel from "./MoviePhotoCarousel";

const MoviePhotoContainer = () => {
  const { movieID, photoPath } = useParams();
  const { movieData, isLoading, handleSpecificEndpoint } = useMovieApi();

  useEffect(() => {
    handleSpecificEndpoint(movieID);
  }, [photoPath]);

  return (
    <div className="flex flex-col justify-between gap-5 lg:gap-10">
      <MoviePhotoCarousel movieData={movieData} isLoading={isLoading} />
      <MoviePhotoDescription movieData={movieData} />
    </div>
  );
};

export default MoviePhotoContainer;
