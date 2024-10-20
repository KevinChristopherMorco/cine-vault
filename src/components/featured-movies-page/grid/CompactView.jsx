import React from "react";

import MovieCard from "../../shared/movie/MovieCard";
import CompactContainer from "../../shared/containers/card-view/CompactContainer";

const CompactView = ({ allMovieList }) => {
  return (
    <CompactContainer>
      {allMovieList.map((movie, index) => {
        return <MovieCard key={index} data={movie.data} cardType={"compact"} />;
      })}
    </CompactContainer>
  );
};

export default CompactView;
