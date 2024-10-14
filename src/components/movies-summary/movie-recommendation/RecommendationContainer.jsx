import React from "react";
import { Link } from "react-router-dom";
import RecommendationCard from "./RecommendationCard";

const RecommendationContainer = ({ appendDetails, isAppendLoading }) => {
  if (isAppendLoading) return;
  const {
    recommendations: { results: recommendationResults },
  } = appendDetails;

  return (
    <div className="flex flex-col gap-8 lg:row-start-3">
      <div className="flex w-fit flex-col gap-4 border-l-4 border-[var(--brand-color-500)] px-2">
        <p className="text-xl font-bold">More like this</p>
      </div>
      <div className="scrollable-content -mx-4 flex gap-4 overflow-x-scroll">
        {recommendationResults.map((movie, index) => (
          <RecommendationCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationContainer;
