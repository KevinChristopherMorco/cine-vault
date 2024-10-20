import React from "react";

import MovieCard from "../../shared/movie/MovieCard";
import DetailedContainer from "../../shared/containers/card-view/DetailedContainer";

const DetailedView = ({ movieData, isLoading }) => {
  return (
    <DetailedContainer>
      {movieData.map((movie, index) => {
        return (
          <MovieCard key={index} data={movie.data} cardType={"detailed"} />
        );
      })}
    </DetailedContainer>
  );
};

export default DetailedView;
