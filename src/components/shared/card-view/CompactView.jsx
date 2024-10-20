import React from "react";

import MovieCard from "../movie/MovieCard";
import CompactContainer from "../containers/card-view/CompactContainer";

const CompactView = ({ movieData, isLoading }) => {
  if (isLoading) return;
  return (
    <CompactContainer>
      {movieData.map((movie, index) => {
        return <MovieCard key={index} data={movie.data} cardType={"compact"} />;
      })}
    </CompactContainer>
  );
};

export default CompactView;
