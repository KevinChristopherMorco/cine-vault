import React from "react";

import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";

import getMovieCertification from "../../../helpers/movie/getMovieCertification";
import formatVoteAverage from "../../../helpers/format/formatVoteAverage";
import formatYear from "../../../helpers/format/formatYear";
import formatRuntime from "../../../helpers/format/formatRuntime";

const GridView = ({ allMovieList, isLoading }) => {
  console.log(allMovieList);
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-10 px-4">
      {allMovieList.map((movie, index) => {
        const {
          title,
          poster_path,
          vote_average,
          vote_count,
          release_date,
          runtime,
        } = movie.data;
        return (
          <div className="flex flex-col gap-2 rounded-md border border-[var(--bg-neutral)]">
            <div className="relative w-full before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-15">
              <img
                src={`http://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className="h-[15rem] w-full rounded-md"
              />
              <p className="text-stroke absolute bottom-0 right-0 text-5xl font-bold text-black">
                {index + 1}
              </p>
            </div>
            <div className="p-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span>
                      <IconStarFilled className="h-4 w-4 text-[var(--brand-color-500)]" />
                    </span>
                    <p className="text-sm">{formatVoteAverage(vote_average)}</p>
                  </div>
                  <p className="text-[.75rem] text-gray-300">({vote_count})</p>
                </div>
                <p className="line-clamp-4 h-[4.5rem] text-sm font-medium">
                  {title}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <ul className="flex gap-2 text-[.8rem] text-gray-300">
                  <li>{formatYear(release_date)}</li>
                  <li>{formatRuntime(runtime)}</li>
                </ul>
                <button className="rounded-md bg-[var(--bg-neutral)] p-2 text-sm font-medium">
                  Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
