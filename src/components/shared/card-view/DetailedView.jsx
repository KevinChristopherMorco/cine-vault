import React from "react";

import DetailedContainer from "../containers/card-view/DetailedContainer";
import MovieCard from "../movie/MovieCard";

const DetailedView = ({ movieData, isLoading }) => {
  console.log(movieData);
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
