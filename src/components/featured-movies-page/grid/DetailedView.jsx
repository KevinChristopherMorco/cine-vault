import React from "react";

import MovieCard from "../../shared/movie/MovieCard";

const DetailedView = ({ allMovieList, isLoading }) => {
  return (
    <div className="flex flex-col px-4 pb-8">
      {allMovieList.map((movie, index) => {
        return (
          <MovieCard key={index} data={movie.data} cardType={"detailed"} />
        );
      })}
    </div>
  );
};

export default DetailedView;
