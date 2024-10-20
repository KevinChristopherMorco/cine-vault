import React from "react";

import getPageUrl from "../../../helpers/getPageUrl";

import MovieCard from "../movie/MovieCard";
import CompactContainer from "../containers/card-view/CompactContainer";

const CompactView = ({ movieData, isLoading }) => {
  const pathname = getPageUrl();

  if (isLoading) return;

  return (
    <CompactContainer>
      {movieData.map((movie, index) => {
        const data = movie.data || movie;
        return (
          <MovieCard
            key={index}
            data={data}
            cardType={"compact"}
            numbering={index}
            isNumbering={
              pathname === "/featured-movies-page/trending-movies" ||
              pathname === "/featured-movies-page/highest-rated-movies"
            }
          />
        );
      })}
    </CompactContainer>
  );
};

export default CompactView;
