import React from "react";
import { Link } from "react-router-dom";
import IconPhotoOff from "@tabler/icons-react/dist/esm/icons/IconPhotoOff.mjs";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import formatTwoDecimal from "../../../helpers/format/formatTwoDecimal";

const RecommendationCard = ({ movie }) => {
  const { poster_path, title, id, vote_average, vote_count } = movie;

  return (
    <Link
      to={`/movies-summary/${id}`}
      className="flex w-[45%] shrink-0 flex-col gap-2 rounded-lg bg-[var(--bg-neutral)] md:w-[30%] lg:w-[30%] xl:w-[25%]"
    >
      {poster_path ? (
        <div>
          <img
            src={`http://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="h-[16rem] w-full rounded-lg"
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
            <p className="text-[.8rem]">{formatTwoDecimal(vote_average)}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-[.8rem] text-gray-400">({vote_count})</p>
          </div>
        </div>
        <p className="line-clamp-1 text-sm font-medium lg:text-base">{title}</p>
        <button className="rounded-md bg-[var(--brand-color-700)] p-2 font-medium">
          Details
        </button>
      </div>
    </Link>
  );
};

export default RecommendationCard;
