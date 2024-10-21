import React from "react";

import MainHeading from "../../shared/headings/MainHeading";
import ReviewCard from "./ReviewCard";

const MovieReviewContainer = ({ movieData, isLoading }) => {
  if (isLoading) return;
  const {
    reviews: { results: movieReviews },
  } = movieData;
  {
    return (
      movieReviews.length > 0 && (
        <div className="flex flex-col gap-8 lg:col-span-2 lg:row-start-3">
          <MainHeading title={"User Reviews"} isLink={true} />
          {movieReviews.map((review, index) => {
            return <ReviewCard key={index} reviewData={review} />;
          })}
        </div>
      )
    );
  }
};

export default MovieReviewContainer;
