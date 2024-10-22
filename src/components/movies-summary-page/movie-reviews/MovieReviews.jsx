import React from "react";

import ReviewCard from "./ReviewCard";
import Empty from "../../alerts/Empty";

const MovieReviews = ({ movieData, isLoading, filter, handleSort }) => {
  const {
    reviews: { results: movieReviews },
  } = movieData;
  return (
    <div className="flex flex-col gap-5 lg:row-start-3">
      {movieReviews.filter(
        (x) => filter === 0 || x.author_details.rating === filter,
      ).length > 0 ? (
        movieReviews
          .filter((x) => filter === 0 || x.author_details.rating === filter)
          .sort((a, b) => handleSort(a, b))
          .map((review, index) => {
            return <ReviewCard key={index} reviewData={review} />;
          })
      ) : (
        <div className="flex w-full justify-center">
          <Empty
            title={"No results were found"}
            subtext={"Please adjust your filters."}
          />
        </div>
      )}
    </div>
  );
};

export default MovieReviews;
