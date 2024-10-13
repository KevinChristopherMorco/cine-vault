import React from "react";
import { useParams } from "react-router-dom";

import useMovieAppend from "../../hooks/axios/useMovieAppend";

import MovieHero from "../../components/movies-summary/MovieHero";

const MoviesSummaryContainer = () => {
  const { id } = useParams();
  const { appendDetails, isAppendLoading } = useMovieAppend(id);
  return (
    <section className="px-4">
      <MovieHero
        appendDetails={appendDetails}
        isAppendLoading={isAppendLoading}
      />
    </section>
  );
};

export default MoviesSummaryContainer;
