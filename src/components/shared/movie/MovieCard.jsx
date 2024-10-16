import React from "react";
import { Link } from "react-router-dom";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";

import formatTwoDecimal from "../../../helpers/format/formatTwoDecimal";
import RatingProgress from "../RatingProgress";

const MovieCard = ({ data, numbering, isNumbering, isRated, isDetailed }) => {
  {
    return isDetailed ? (
      <div className="flex w-[45%] shrink-0 flex-col gap-2 rounded-lg bg-[var(--bg-neutral)] md:w-[30%] lg:w-[30%] xl:w-[25%]">
        {data.poster_path ? (
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              className="h-full min-h-[14rem] w-full rounded-md"
            />
          </div>
        ) : (
          <div className="flex h-[10rem] w-full flex-col items-center justify-center gap-2 rounded-lg bg-[var(--bg-neutral)] text-center">
            <IconPhotoOff className="h-[3rem] w-[3rem]" />
            <p className="text-sm">No image available</p>
          </div>
        )}

        <div className="flex flex-col justify-end gap-6 px-2 py-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <IconStarFilled className="h-4 w-4 text-[var(--brand-color-500)]" />
              <p className="text-[.8rem]">
                {formatTwoDecimal(data.vote_average)}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[.8rem] text-gray-400">({data.vote_count})</p>
            </div>
          </div>
          <p className="line-clamp-1 text-sm font-medium lg:text-base">
            {data.title}
          </p>
          <Link
            to={`/movies-summary/${data.id}`}
            className="rounded-md bg-[var(--brand-color-700)] p-2 text-center font-medium"
          >
            Details
          </Link>
        </div>
      </div>
    ) : (
      <div className="flex flex-col gap-2">
        <div className="relative">
          <img
            src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
            className="h-full min-h-[14rem] w-full rounded-md"
          />
          {isNumbering && (
            <p className="text-stroke absolute -left-4 bottom-0 text-6xl font-bold text-black">
              {numbering + 1}
            </p>
          )}
          {isRated && (
            <div className="absolute bottom-0 right-1">
              <RatingProgress />
            </div>
          )}
        </div>
        <p className="line-clamp-1 text-center text-[.8rem] font-medium">
          {data.title}
        </p>
      </div>
    );
  }
};

export default MovieCard;
