import React from "react";
import { useParams } from "react-router-dom";

import useMovieAppend from "../../hooks/axios/useMovieAppend";

import MovieHero from "../../components/movies-summary/MovieHero";
import RecommendationContainer from "../../components/movies-summary/movie-recommendation/RecommendationContainer";
import MoviePhotoContainer from "../../components/movies-summary/movie-photos/MoviePhotoContainer";
import MovieCastCrewContainer from "../../components/movies-summary/movies-cast-crew/MovieCastCrewContainer";

const MoviesSummaryContainer = () => {
  const { id } = useParams();
  const { appendDetails, isAppendLoading } = useMovieAppend(id);
  return (
    <section className="flex flex-col gap-8 px-4">
      <MovieHero
        appendDetails={appendDetails}
        isAppendLoading={isAppendLoading}
      />
      <MoviePhotoContainer
        appendDetails={appendDetails}
        isAppendLoading={isAppendLoading}
      />
      <MovieCastCrewContainer
        appendDetails={appendDetails}
        isAppendLoading={isAppendLoading}
      />
      <RecommendationContainer
        appendDetails={appendDetails}
        isAppendLoading={isAppendLoading}
      />
    </section>
  );
};

export default MoviesSummaryContainer;
