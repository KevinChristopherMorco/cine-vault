import React from "react";

import MovieCard from "../../shared/movie/MovieCard";

const GridView = ({ allMovieList, isLoading }) => {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-10 px-4 md:grid-cols-4">
      {allMovieList.map((movie, index) => {
        return <MovieCard key={index} data={movie.data} cardType={"grid"} />;
      })}
    </div>
  );
};

export default GridView;
