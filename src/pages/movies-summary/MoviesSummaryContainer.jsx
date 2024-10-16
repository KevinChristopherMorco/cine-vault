import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieAppend from "../../hooks/axios/useMovieAppend";

import MovieHero from "../../components/movies-summary/MovieHero";
import RecommendationContainer from "../../components/movies-summary/movie-recommendation/RecommendationContainer";
import MoviePhotoContainer from "../../components/movies-summary/movie-photos/MoviePhotoContainer";
import MovieCastCrewContainer from "../../components/movies-summary/movies-cast-crew/MovieCastCrewContainer";

import falsy from "../../json/falsy.json";

const MoviesSummaryContainer = () => {
  const { id } = useParams();
  const { appendDetails, isAppendLoading } = useMovieAppend(id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.body.classList.remove("overflow-hidden");
  }, [id]);

  return (
    <section className="flex animate-fadeIn flex-col gap-8 px-4 lg:gap-12 lg:px-10">
      <MovieHero
        appendDetails={appendDetails}
        isAppendLoading={isAppendLoading}
      />
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[70%_30%] lg:gap-16">
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
      </div>
    </section>
  );
};

export default MoviesSummaryContainer;
