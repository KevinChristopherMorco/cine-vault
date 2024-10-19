import React from "react";
import { Link } from "react-router-dom";

import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconPhotoOff from "@tabler/icons-react/dist/esm/icons/IconPhotoOff.mjs";

import formatVoteAverage from "../../../helpers/format/formatVoteAverage";
import formatYear from "../../../helpers/format/formatYear";
import formatRuntime from "../../../helpers/format/formatRuntime";
import getCurrentDate from "../../../helpers/getCurrentDate";

const GridView = ({ movieData, isLoading }) => {
  if (isLoading) return;

  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 lg:col-span-1 lg:col-start-1">
      {movieData.results.map((movie, index) => {
        const {
          id,
          title,
          poster_path,
          vote_average,
          vote_count,
          release_date,
          runtime,
        } = movie;

        const currentDate = getCurrentDate();

        return (
          <div
            key={index}
            className="flex animate-fadeIn flex-col gap-2 rounded-md border border-[var(--bg-neutral)] bg-[var(--bg-neutral-light)]"
          >
            <div className="relative w-full before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-15">
              {poster_path ? (
                <img
                  src={`http://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  className="h-[15rem] w-full rounded-md lg:h-[18rem] xl:h-[24rem]"
                />
              ) : (
                <div className="flex h-[15rem] w-full flex-col items-center justify-center gap-2 rounded-md bg-[var(--bg-neutral)] text-center lg:h-[18rem] xl:h-[24rem]">
                  <IconPhotoOff className="h-[3rem] w-[3rem]" />
                  <p className="text-sm">No poster available</p>
                </div>
              )}
            </div>
            <div className="p-2">
              <div className="flex h-[7rem] flex-col gap-2 lg:h-[10rem]">
                {release_date <= currentDate && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span>
                        <IconStarFilled className="h-4 w-4 text-[var(--star-color)]" />
                      </span>
                      <p className="text-sm md:text-base">
                        {formatVoteAverage(vote_average)}
                      </p>
                    </div>
                    <p className="text-[.75rem] text-gray-300 md:text-[.8rem]">
                      ({vote_count})
                    </p>
                  </div>
                )}

                <p className="line-clamp-4 h-[5.5rem] text-sm font-medium md:h-[7rem] md:text-base lg:text-base">
                  {title}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <ul className="flex h-[2rem] items-center gap-2 text-[.8rem] text-gray-300 md:text-[.9rem]">
                  <li>{formatYear(release_date)}</li>
                  <li>{formatRuntime(runtime)}</li>
                </ul>
                <Link
                  to={`/movies-summary/${id}`}
                  className="rounded-full bg-[var(--brand-color-700)] p-2 text-center font-medium transition-colors hover:bg-[var(--brand-color-600)]"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
