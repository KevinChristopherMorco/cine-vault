import React from "react";
import { Link } from "react-router-dom";
import RecommendationCard from "./RecommendationCard";
import MainHeading from "../../shared/headings/MainHeading";

const RecommendationContainer = ({ appendDetails, isAppendLoading }) => {
  if (isAppendLoading) return;
  const {
    recommendations: { results: recommendationResults },
  } = appendDetails;

  return (
    <div className="flex flex-col gap-8 lg:row-start-3">
      <MainHeading title={"More Like This"} isLink={true} />
      <div className="scrollable-content -mx-4 flex gap-4 overflow-x-scroll">
        {recommendationResults.map((movie, index) => (
          <RecommendationCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationContainer;
