import React, { useEffect, useState } from "react";

import useModalControls from "../../hooks/shared/useModalControls";

import MovieModal from "../shared/modals/MovieModal";
import Spinner from "../shared/loaders/Spinner";
import MainHeading from "../shared/headings/MainHeading";
import MovieCard from "../shared/movie/MovieCard";
import useMovieApi from "../../hooks/axios/useMovieApi";
import OverlayContainer from "../shared/containers/OverlayContainer";
import useCardSlider from "../../hooks/shared/useCardSlider";
import ArrowScroll from "../shared/arrow-scroll/ArrowScroll";

const Feautred = ({
  title,
  subtext,
  link,
  endpoint,
  cardType,
  toggle,
  isNumbering,
  isRated,
}) => {
  const { movieData, isLoading, handleCommonEndpoint } = useMovieApi();
  const { isModalOpen, setModal, modalData, setModalData } = useModalControls();

  const {
    arrows: { hideRightArrow, hideLeftArrow },
    sliderRef,
    handleScroll,
  } = useCardSlider();

  useEffect(() => {
    handleCommonEndpoint(link);
  }, []);

  return (
    <OverlayContainer>
      <MainHeading
        title={title}
        endpoint={endpoint}
        subtext={subtext}
        isLink={true}
        hasSubtext={true}
      />

      <div className="scroll relative">
        <ArrowScroll
          hideRightArrow={hideRightArrow}
          hideLeftArrow={hideLeftArrow}
          handleScroll={handleScroll}
        />

        <div
          ref={sliderRef}
          className="scrollable-content relative -mx-4 flex gap-x-6 overflow-x-scroll px-4 py-2 lg:-mx-8"
        >
          {!isLoading ? (
            movieData.results.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  data={movie}
                  numbering={index}
                  isNumbering={isNumbering}
                  isRated={isRated}
                  cardType={cardType}
                  setModal={setModal}
                  setModalData={setModalData}
                />
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>

      {isModalOpen && (
        <MovieModal
          movieData={modalData}
          setModal={setModal}
          isLoading={isLoading}
          isPreview={true}
        />
      )}
    </OverlayContainer>
  );
};

export default Feautred;
