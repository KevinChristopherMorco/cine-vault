import React from "react";

import getPageUrl from "../../../helpers/getPageUrl";

import MovieCard from "../movie/MovieCard";
import GridContainer from "../containers/card-view/GridContainer";

const GridView = ({ movieData, isLoading }) => {
  const pathname = getPageUrl();

  if (isLoading) return;

  return (
    <GridContainer>
      {movieData.map((movie, index) => {
        const data = movie.data || movie;
        return (
          <MovieCard
            key={index}
            data={data}
            cardType={"grid"}
            numbering={index}
            isNumbering={
              pathname === "/featured-movies-page/trending-movies" ||
              pathname === "/featured-movies-page/highest-rated-movies"
            }
          />
        );
      })}
    </GridContainer>
  );
};

export default GridView;
