import React from "react";
import { Link } from "react-router-dom";

import MainHeading from "../../shared/headings/MainHeading";
import MovieCard from "../../shared/movie/MovieCard";

const RecommendationContainer = ({
  movieData,
  isLoading,
  setModal,
  setModalData,
}) => {
  if (isLoading) return;
  const {
    recommendations: { results: recommendationResults },
  } = movieData;
  {
    recommendationResults.length > 1;
  }

  {
    return (
      recommendationResults.length > 1 && (
        <div className="flex flex-col gap-8 lg:col-span-2 lg:row-start-3">
          <MainHeading title={"More Like This"} isLink={true} />
          <div className="scrollable-content -mx-4 flex gap-4 overflow-x-scroll px-4">
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
      )
    );
  }
};

export default RecommendationContainer;
