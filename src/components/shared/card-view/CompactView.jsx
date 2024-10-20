import React from "react";

import MovieCard from "../movie/MovieCard";
import CompactContainer from "../containers/card-view/CompactContainer";

const CompactView = ({ movieData, isLoading }) => {
  if (isLoading) return;
  return (
    <CompactContainer>
      {movieData.map((movie, index) => {
        const data = movie.data || movie;
        return <MovieCard key={index} data={data} cardType={"compact"} />;
      })}
    </CompactContainer>
  );
};

export default CompactView;
