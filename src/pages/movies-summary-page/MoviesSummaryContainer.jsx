import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieApi from "../../hooks/axios/useMovieApi";
import useModalControls from "../../hooks/shared/useModalControls";
import falsy from "../../json/falsy.json";

import MovieHero from "../../components/movies-summary-page/movie-hero/MovieHeroContainer";
import RecommendationContainer from "../../components/movies-summary-page/movie-recommendation/RecommendationContainer";
import MoviePhotoPreview from "../../components/movies-summary-page/movie-photos/MoviePhotoPreview";
import MovieCastCrewContainer from "../../components/movies-summary-page/movies-cast-crew/MovieCastCrewContainer";
import MovieReviewContainer from "../../components/movies-summary-page/movie-reviews/MovieReviewContainer";

import MovieModal from "../../components/shared/modals/MovieModal";

const MoviesSummaryContainer = () => {
  const { id } = useParams();
  const { movieData, isLoading, handleSpecificEndpoint } = useMovieApi();
  const { isModalOpen, setModal, modalData, setModalData } = useModalControls();

  useEffect(() => {
    handleSpecificEndpoint(id);
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.body.classList.remove("overflow-hidden");
  }, [id]);

  return (
    <section className="flex animate-fadeIn flex-col gap-8 px-4 lg:gap-12 lg:px-10">
      <MovieHero movieData={movieData} isLoading={isLoading} />
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-16">
        <MoviePhotoPreview movieData={movieData} isLoading={isLoading} />
        <MovieCastCrewContainer movieData={movieData} isLoading={isLoading} />
        <MovieReviewContainer movieData={movieData} isLoading={isLoading} />
        <RecommendationContainer
          movieData={movieData}
          isLoading={isLoading}
          setModal={setModal}
          setModalData={setModalData}
        />
      </div>

      {isModalOpen && (
        <MovieModal
          movieData={modalData}
          setModal={setModal}
          isLoading={isLoading}
        />
      )}
    </section>
  );
};

export default MoviesSummaryContainer;
