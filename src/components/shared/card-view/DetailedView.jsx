import React from "react";

import DetailedContainer from "../containers/card-view/DetailedContainer";
import MovieCard from "../movie/MovieCard";
import getPageUrl from "../../../helpers/getPageUrl";

const DetailedView = ({ movieData, isLoading }) => {
  const pathname = getPageUrl();

  return (
    <DetailedContainer>
      {movieData.map((movie, index) => {
        const data = movie.data || movie;
        return (
          <MovieCard
            key={index}
            data={data}
            cardType={"detailed"}
            numbering={index}
            isNumbering={
              pathname === "/featured-movies-page/trending-movies" ||
              pathname === "/featured-movies-page/highest-rated-movies"
            }
          />
        );
      })}
    </DetailedContainer>
  );
};

export default DetailedView;
