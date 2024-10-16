import React from "react";
import IconList from "@tabler/icons-react/dist/esm/icons/IconList.mjs";

const GenreMoviesPreview = ({ movieData }) => {
  return (
    <div className="relative flex w-full md:col-start-2 md:row-start-2">
      {movieData.results.slice(4, 7).map((movie, index) => (
        <img
          key={index}
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="h-full w-[33%] rounded-lg"
        />
      ))}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-70 p-1 text-sm font-medium">
        <div className="group flex w-fit cursor-pointer items-center gap-2 transition-colors">
          <IconList className="h-4 w-4 group-hover:text-[var(--brand-color-400)]" />
          <p className="group-hover:text-[var(--brand-color-400)]">List</p>
        </div>
      </div>
    </div>
  );
};

export default GenreMoviesPreview;
