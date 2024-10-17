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
import useMovieApi from "../../hooks/axios/useMovieApi";

const MoviesSummaryContainer = () => {
  const { id } = useParams();
  const { movieData, isLoading, handleSpecificEndpoint } = useMovieApi();
  const { isModalOpen, setModal, modalData, setModalData } = useModalControls();

  useEffect(() => {
    handleSpecificEndpoint(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos,credits,certifications,recommendations,release_dates,images`,
    );
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.body.classList.remove("overflow-hidden");
  }, [id]);

  return (
    <section className="flex animate-fadeIn flex-col gap-8 px-4 lg:gap-12 lg:px-10">
      <MovieHero movieData={movieData} isLoading={isLoading} />
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-16">
        <MoviePhotoContainer
          appendDetails={movieData}
          isAppendLoading={isLoading}
        />
        <MovieCastCrewContainer
          appendDetails={movieData}
          isAppendLoading={isLoading}
        />
        <RecommendationContainer
          appendDetails={movieData}
          isAppendLoading={isLoading}
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
