import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useMoviePages from "../../hooks/axios/useMoviePages";

import ListView from "../../components/movies-list/ListView";
import Spinner from "../../components/shared/loaders/Spinner";

const MoviesListContainer = () => {
  const { list } = useParams();
  const { isLoading, allMovieList } = useMoviePages("top_rated", 10);

  const handleTitle = () => {
    if (list === "trending-movies") {
      return "Trending Movies This Week";
    }
    if (list === "highest-rated-movies") {
      return "All-Time Highest Rated Movie";
    }

    if (list === "in-theaters-movies") {
      return "In Theaters";
    }
  };
  return (
    <section className="mt-[5rem] flex animate-fadeIn flex-col gap-8">
      <div className="flex flex-col gap-4 px-4 pt-4">
        <div>
          <p className="text-2xl font-bold">TMDB Charts</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="border-l-4 border-[var(--brand-color-500)]">
            <p className="px-2 text-4xl font-light">{handleTitle()}</p>
          </div>
          <div>
            <p>As determined by TMDB users</p>
          </div>
        </div>
      </div>
      <div>
        {!isLoading ? (
          <ListView isLoading={isLoading} allMovieList={allMovieList} />
        ) : (
          <div className="flex flex-col items-center">
            <Spinner />
          </div>
        )}
      </div>
    </section>
  );
};

export default MoviesListContainer;
