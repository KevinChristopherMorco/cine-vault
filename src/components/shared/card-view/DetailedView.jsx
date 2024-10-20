import React from "react";

import DetailedContainer from "../containers/card-view/DetailedContainer";
import MovieCard from "../movie/MovieCard";

const DetailedView = ({ movieData, isLoading }) => {
  return (
    <DetailedContainer>
      {movieData.map((movie, index) => {
        const data = movie.data || movie;
        return <MovieCard key={index} data={data} cardType={"detailed"} />;
      })}
    </DetailedContainer>
  );
};

export default DetailedView;
