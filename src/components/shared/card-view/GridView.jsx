import React from "react";

import MovieCard from "../movie/MovieCard";
import GridContainer from "../containers/card-view/GridContainer";

const GridView = ({ movieData, isLoading }) => {
  if (isLoading) return;

  return (
    <GridContainer>
      {movieData.map((movie, index) => {
        return <MovieCard key={index} data={movie.data} cardType={"grid"} />;
      })}
    </GridContainer>
  );
};

export default GridView;
