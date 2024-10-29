import React from "react";

import MainHeading from "../../shared/headings/MainHeading";
import ReviewCard from "./ReviewCard";

const MovieReviewPreview = ({ movieData, isLoading }) => {
  if (isLoading) return;
  const {
    id,
    reviews: { results: movieReviews },
  } = movieData;

  if (movieReviews.length > 0) {
    return (
      <div className="flex flex-col gap-8 lg:col-span-2 lg:row-start-3">
        <MainHeading
          title={"User Reviews"}
          number={movieReviews.length}
          endpoint={`/review/${id}`}
          isLink={true}
          isNumbered={true}
        />
        {movieReviews
          .filter((review) => review.content)
          .sort((a, b) => b.author_details.rating - a.author_details.rating)
          .slice(0, 1)
          .map((review, index) => {
            return <ReviewCard key={index} reviewData={review} />;
          })}
      </div>
    );
  }
};

export default MovieReviewPreview;
