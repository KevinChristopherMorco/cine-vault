import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieAppend from "../../hooks/axios/useMovieAppend";
import useModalControls from "../../hooks/shared/useModalControls";
import falsy from "../../json/falsy.json";

import MovieHero from "../../components/movies-summary/MovieHero";
import RecommendationContainer from "../../components/movies-summary/movie-recommendation/RecommendationContainer";
import MoviePhotoContainer from "../../components/movies-summary/movie-photos/MoviePhotoContainer";
import MovieCastCrewContainer from "../../components/movies-summary/movies-cast-crew/MovieCastCrewContainer";

import MovieModal from "../../components/shared/modals/MovieModal";

const MoviesSummaryContainer = () => {
  const { id } = useParams();
  const { appendDetails, isAppendLoading } = useMovieAppend(id);
  const { isModalOpen, setModal, modalData, setModalData } = useModalControls();

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
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-16">
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
          setModal={setModal}
          setModalData={setModalData}
        />
      </div>

      {isModalOpen && (
        <MovieModal
          movieData={modalData}
          setModal={setModal}
          isLoading={isAppendLoading}
        />
      )}
    </section>
  );
};

export default MoviesSummaryContainer;
