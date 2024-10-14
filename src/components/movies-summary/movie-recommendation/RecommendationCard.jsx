import React from "react";
import { Link } from "react-router-dom";
import IconPhotoOff from "@tabler/icons-react/dist/esm/icons/IconPhotoOff.mjs";

const RecommendationCard = ({ movie }) => {
  const { poster_path, title, id } = movie;

  return (
    <Link
      to={`/movies-summary/${id}`}
      className="flex w-[30%] shrink-0 flex-col gap-2 rounded-lg bg-[var(--bg-neutral)] md:w-[20%] lg:w-[15%]"
    >
      {poster_path ? (
        <div>
          <img
            src={`http://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="h-[10rem] w-full rounded-lg"
          />
        </div>
      ) : (
        <div className="flex h-[10rem] w-full flex-col items-center justify-center gap-2 rounded-lg bg-[var(--bg-neutral)] text-center">
          <IconPhotoOff className="h-[3rem] w-[3rem]" />
          <p className="text-sm">No image available</p>
        </div>
      )}

      <div className="flex h-[2rem] flex-col justify-end px-2 py-2 lg:h-[3rem]">
        <p className="line-clamp-1 text-sm font-medium lg:text-base">{title}</p>
      </div>
    </Link>
  );
};

export default RecommendationCard;
