import React from "react";

import useCardSlider from "../../../hooks/shared/useCardSlider";

import MainHeading from "../../shared/headings/MainHeading";
import MovieCard from "../../shared/movie/MovieCard";
import ArrowScroll from "../../shared/arrow-scroll/ArrowScroll";

const RecommendationContainer = ({
  movieData,
  isLoading,
  setModal,
  setModalData,
}) => {
  const {
    arrows: { hideRightArrow, hideLeftArrow },
    sliderRef,
    handleScroll,
  } = useCardSlider();

  if (isLoading) return;

  const {
    recommendations: { results: recommendationResults },
  } = movieData;
  {
    recommendationResults.length > 1;
  }

  if (recommendationResults.length > 0) {
    return (
      <div className="relative flex flex-col gap-8 lg:col-span-2 lg:row-start-4">
        <MainHeading title={"More Like This"} isLink={true} />
        <ArrowScroll
          hideRightArrow={hideRightArrow}
          hideLeftArrow={hideLeftArrow}
          handleScroll={handleScroll}
        />
        <div
          ref={sliderRef}
          className="scrollable-content -mx-4 flex gap-4 overflow-x-scroll px-4"
        >
          {recommendationResults.map((movie, index) => (
            <MovieCard
              key={index}
              data={movie}
              cardType={"carousel"}
              setModal={setModal}
              setModalData={setModalData}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default RecommendationContainer;
