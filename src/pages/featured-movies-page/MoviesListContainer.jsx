import React from "react";

import useMoviePages from "../../hooks/axios/useMoviePages";
import usePageData from "../../hooks/featured-movies-page/usePageData";

import ListView from "../../components/featured-movies-page/ListView";
import Spinner from "../../components/shared/loaders/Spinner";
import RecommendPage from "../../components/featured-movies-page/recommended-pages/RecommendPage";
import OverlayContainer from "../../components/shared/containers/OverlayContainer";

const MoviesListContainer = () => {
  const { isLoading, allMovieList, handleEndpoint } = useMoviePages();
  const {
    dynamicPageData: { title },
  } = usePageData(handleEndpoint);

  return (
    <section className="flex animate-fadeIn flex-col gap-8">
      <OverlayContainer>
        <div>
          <p className="text-2xl font-bold">TMDB Charts</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="border-l-4 border-[var(--brand-color-500)]">
            <p className="px-2 text-4xl font-light">{title}</p>
          </div>
          <div>
            <p>As determined by TMDB users</p>
          </div>
        </div>
      </OverlayContainer>
      <div>
        {!isLoading ? (
          <ListView isLoading={isLoading} movieData={allMovieList} />
        ) : (
          <div className="flex flex-col items-center">
            <Spinner />
          </div>
        )}
      </div>
      <RecommendPage isLoading={isLoading} />
    </section>
  );
};

export default MoviesListContainer;
