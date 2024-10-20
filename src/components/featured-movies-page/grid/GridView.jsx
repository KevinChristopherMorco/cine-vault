import React from "react";

import MovieCard from "../../shared/movie/MovieCard";
import GridContainer from "../../shared/containers/card-view/GridContainer";

const GridView = ({ movieData, isLoading }) => {
  return (
    <GridContainer>
      {movieData.map((movie, index) => {
        return <MovieCard key={index} data={movie.data} cardType={"grid"} />;
      })}
    </GridContainer>
  );
};

export default GridView;
