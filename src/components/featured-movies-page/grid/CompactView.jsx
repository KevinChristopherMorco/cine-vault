import React from "react";

import MovieCard from "../../shared/movie/MovieCard";

const CompactView = ({ allMovieList }) => {
  return (
    <div className="flex flex-col gap-4 px-4 pb-4">
      {allMovieList.map((movie, index) => {
        return <MovieCard key={index} data={movie.data} cardType={"compact"} />;
      })}
    </div>
  );
};

export default CompactView;
