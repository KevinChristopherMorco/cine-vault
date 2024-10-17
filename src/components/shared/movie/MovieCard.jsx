import React from "react";
import { Link } from "react-router-dom";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconPlayerPlayFilled from "@tabler/icons-react/dist/esm/icons/IconPlayerPlayFilled.mjs";
import IconExclamationCircle from "@tabler/icons-react/dist/esm/icons/IconExclamationCircle.mjs";
import IconPhotoOff from "@tabler/icons-react/dist/esm/icons/IconPhotoOff.mjs";

import formatTwoDecimal from "../../../helpers/format/formatTwoDecimal";
import RatingProgress from "../RatingProgress";

const MovieCard = ({
  data,
  numbering,
  isNumbering,
  isRated,
  isDetailed,
  setModal,
  setModalData,
}) => {
  {
    return isDetailed ? (
      <div className="flex w-[50%] shrink-0 flex-col gap-2 rounded-lg bg-[var(--bg-neutral-light)] md:w-[25%] lg:w-[20%] xl:w-[15%]">
        {data.poster_path ? (
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              className="h-[14rem] w-full rounded-md"
            />
          </div>
        ) : (
          <div className="flex h-[14rem] w-full flex-col items-center justify-center gap-2 rounded-lg bg-[var(--bg-neutral)] text-center">
            <IconPhotoOff className="h-[3rem] w-[3rem]" />
            <p className="text-sm">No image available</p>
          </div>
        )}

        <div className="flex flex-col justify-end gap-6 p-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <IconStarFilled className="h-4 w-4 text-[var(--star-color)]" />
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
          <div className="flex flex-col gap-4">
            <Link
              to={`/movies-summary/${data.id}`}
              className="rounded-full bg-[var(--brand-color-700)] p-2 text-center font-medium transition-colors hover:bg-[var(--brand-color-600)]"
            >
              Details
            </Link>
            <div className="flex items-center justify-between">
              <Link
                to={`/video/${data.id}`}
                className="flex items-center gap-2 font-medium transition-colors hover:text-gray-300"
              >
                <IconPlayerPlayFilled className="h-4 w-4" /> Trailer
              </Link>
              <IconExclamationCircle
                className="h-5 w-5 cursor-pointer transition-colors hover:text-gray-300"
                onClick={() => {
                  setModal(true);
                  setModalData(data);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="group flex w-[10rem] shrink-0 animate-fadeIn cursor-pointer flex-col gap-2">
        <div
          className="relative w-full"
          onClick={() => {
            setModal(true);
            setModalData(data);
          }}
        >
          <img
            src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
            className="h-[14rem] w-full rounded-md transition-transform group-hover:scale-105"
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
        <p className="line-clamp-1 text-center text-[.8rem] font-medium transition-colors group-hover:text-[var(--brand-color-200)] md:text-[.9rem]">
          {data.title}
        </p>
      </div>
    );
  }
};

export default MovieCard;
