import React from "react";
import { Link } from "react-router-dom";

import getMovieGenre from "../../../helpers/movie/getMovieGenre";

const HeroOverview = ({ isLoading, movieData, overview }) => {
  return (
    <div className="flex flex-col gap-4 py-6 pr-4 md:col-span-2 md:px-0 md:py-4 md:pr-0 lg:col-span-3 lg:row-start-3">
      {!isLoading && (
        <ul className="scrollable-content flex w-full gap-2 overflow-x-scroll py-1">
          {getMovieGenre(movieData).map((genre, index) => (
            <li key={index} className="shrink-0">
              <Link
                to={`/genre/${genre.id}`}
                className="cursor-pointer rounded-full border border-gray-500 px-5 py-1 text-[.75rem] font-medium transition-colors hover:bg-[var(--bg-neutral)]"
              >
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <p className="text-sm">
        {overview ? overview : "* Cannot generate a movie summary"}
      </p>
    </div>
  );
};

export default HeroOverview;
