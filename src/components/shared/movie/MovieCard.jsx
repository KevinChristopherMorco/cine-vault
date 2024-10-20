import React from "react";
import { Link } from "react-router-dom";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconPlayerPlayFilled from "@tabler/icons-react/dist/esm/icons/IconPlayerPlayFilled.mjs";
import IconExclamationCircle from "@tabler/icons-react/dist/esm/icons/IconExclamationCircle.mjs";
import IconPhotoOff from "@tabler/icons-react/dist/esm/icons/IconPhotoOff.mjs";

import formatTwoDecimal from "../../../helpers/format/formatTwoDecimal";
import formatYear from "../../../helpers/format/formatYear";
import formatRuntime from "../../../helpers/format/formatRuntime";
import formatVoteAverage from "../../../helpers/format/formatVoteAverage";
import getCurrentDate from "../../../helpers/getCurrentDate";

import RatingProgress from "../RatingProgress";

const currentDate = getCurrentDate();

const MovieCard = ({
  data,
  numbering,
  cardType,
  isNumbering,
  isRated,
  setModal,
  setModalData,
}) => {
  return (
    <>
      {cardType === "poster" && (
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
              alt={data.title}
              className="h-[14rem] w-full rounded-md transition-transform group-hover:scale-105"
            />
            {isNumbering && (
              <p className="text-stroke absolute -left-4 bottom-0 text-6xl font-bold text-black">
                {numbering + 1}
              </p>
            )}
            {isRated && (
              <div className="absolute bottom-0 right-1">
                <RatingProgress vote={data.vote_average} />
              </div>
            )}
          </div>
          <p className="line-clamp-1 text-center text-[.8rem] font-medium transition-colors group-hover:text-[var(--brand-color-200)] md:text-[.9rem]">
            {data.title}
          </p>
        </div>
      )}

      {cardType === "carousel" && (
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
                <p className="text-[.8rem] text-gray-400">
                  ({data.vote_count})
                </p>
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
      )}

      {cardType === "compact" && (
        <div className="flex animate-fadeIn gap-2">
          <Link
            to={`/movies-summary/${data.id}`}
            className="relative w-fit cursor-pointer before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-15"
          >
            <img
              src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              className="h-[6rem] w-[5rem] rounded-md md:h-[8rem] md:w-[5rem] lg:h-[9rem] lg:w-[6rem]"
            />
            {isNumbering && (
              <p className="text-stroke absolute bottom-0 left-1 text-2xl font-bold text-black md:text-4xl lg:text-3xl">
                {numbering + 1}
              </p>
            )}
          </Link>
          <div className="flex flex-col gap-4 px-2">
            <div className="flex flex-col gap-2">
              <Link
                to={`/movies-summary/${data.id}`}
                className="cursor-pointer text-sm font-bold transition-colors hover:text-[var(--brand-color-500)] md:text-base lg:text-lg"
              >
                {data.title}
              </Link>
              <ul className="flex gap-2 text-[.8rem] text-gray-300 md:text-[.9rem] lg:text-base">
                <li>{formatYear(data.release_date)}</li>
                <li>{formatRuntime(data.runtime)}</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 text-[.75rem] md:text-[.9rem] lg:text-base">
              <div className="flex items-center gap-1">
                <span>
                  <IconStarFilled className="h-3 w-3 text-[var(--star-color)]" />
                </span>
                <p className="">{formatVoteAverage(data.vote_average)}</p>
              </div>
              <p className="text-gray-300">({data.vote_count})</p>
            </div>
          </div>
        </div>
      )}

      {cardType === "grid" && (
        <div className="flex animate-fadeIn flex-col gap-2 rounded-md border border-[var(--bg-neutral)] bg-[var(--bg-neutral-light)]">
          <div className="relative w-full before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-15">
            {data.poster_path ? (
              <img
                src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                className="h-[15rem] w-full rounded-md lg:h-[18rem] xl:h-[24rem]"
              />
            ) : (
              <div className="flex h-[15rem] w-full flex-col items-center justify-center gap-2 rounded-md bg-[var(--bg-neutral)] text-center lg:h-[18rem] xl:h-[24rem]">
                <IconPhotoOff className="h-[3rem] w-[3rem]" />
                <p className="text-sm">No poster available</p>
              </div>
            )}
            {isNumbering && (
              <p className="text-stroke absolute bottom-0 left-2 text-6xl font-bold text-black">
                {numbering + 1}
              </p>
            )}
          </div>
          <div className="p-2">
            <div className="flex h-[7rem] flex-col gap-2 lg:h-[10rem]">
              {currentDate >= data.release_date && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span>
                      <IconStarFilled className="h-4 w-4 text-[var(--star-color)]" />
                    </span>
                    <p className="text-sm md:text-base">
                      {formatVoteAverage(data.vote_average)}
                    </p>
                  </div>
                  <p className="text-[.75rem] text-gray-300 md:text-[.8rem]">
                    ({data.vote_count})
                  </p>
                </div>
              )}
              <p className="line-clamp-4 h-[5.5rem] text-sm font-medium md:h-[7rem] md:text-base lg:text-base">
                {data.title}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <ul className="flex h-[2rem] items-center gap-2 text-[.8rem] text-gray-300 md:text-[.9rem]">
                <li>{formatYear(data.release_date)}</li>
                <li>{formatRuntime(data.runtime)}</li>
              </ul>
              <Link
                to={`/movies-summary/${data.id}`}
                className="rounded-full bg-[var(--brand-color-700)] p-2 text-center font-medium transition-colors hover:bg-[var(--brand-color-600)]"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      )}
      {cardType === "detailed" && (
        <div className="flex animate-fadeIn flex-col gap-4 border-b border-[var(--brand-color-500)] py-6">
          <div className="flex gap-2">
            <Link
              to={`/movies-summary/${data.id}`}
              className="relative w-fit cursor-pointer before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-15"
            >
              <img
                src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt=""
                className="h-[6rem] w-[5rem] rounded-md md:h-[7rem] md:w-[5rem]"
              />
              {isNumbering && (
                <p className="text-stroke absolute bottom-0 left-1 text-2xl font-bold text-black md:text-4xl lg:text-4xl">
                  {numbering + 1}
                </p>
              )}
            </Link>
            <div className="flex flex-col gap-4 px-2">
              <div className="flex flex-col gap-2">
                <Link
                  to={`/movies-summary/${data.id}`}
                  className="cursor-pointer text-sm font-bold transition-colors hover:text-[var(--brand-color-500)] md:text-base"
                >
                  {data.title}
                </Link>
                <ul className="flex gap-2 text-[.8rem] text-gray-300 md:text-[.9rem]">
                  <li>{formatYear(data.release_date)}</li>
                  <li>{formatRuntime(data.runtime)}</li>
                  {/* <li>
                    {(usCertification || phCertification) && (
                      <div className="flex items-center gap-1">
                        <img
                          src={
                            usCertification
                              ? `https://em-content.zobj.net/source/facebook/200/flag-for-united-states_1f1fa-1f1f8.png`
                              : `https://em-content.zobj.net/source/facebook/65/flag-for-philippines_1f1f5-1f1ed.png`
                          }
                          className="h-3 w-3"
                        />
                        <p>{usCertification || phCertification}</p>
                      </div>
                    )}
                  </li> */}
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span>
                    <IconStarFilled className="h-3 w-3 text-[var(--star-color)]" />
                  </span>
                  <p className="text-[.75rem]">
                    {formatVoteAverage(data.vote_average)}
                  </p>
                </div>
                <p className="text-[.75rem] text-gray-300">
                  ({data.vote_count})
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="line-clamp-4 text-[.75rem] md:text-sm">
              {data.overview}
            </p>
            <div className="flex gap-2">
              <div className="flex flex-wrap gap-1">
                <p className="text-[.75rem] font-bold md:text-sm">
                  Directed By:
                </p>
                {data.credits.crew.slice(0, 1).map((crew, index) => (
                  <p key={index} className="text-[.75rem] text-gray-300">
                    {crew.name}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                <p className="text-[.75rem] font-bold">Stars:</p>
                {data.credits.cast.slice(0, 2).map((cast, index) => (
                  <p key={index} className="text-[.75rem] text-gray-300">
                    {cast.name} {index !== 1 && <span>,</span>}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
