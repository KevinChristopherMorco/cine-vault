import React from "react";

import IconPointFilled from "@tabler/icons-react/dist/esm/icons/IconPointFilled.mjs";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconVideo from "@tabler/icons-react/dist/esm/icons/IconVideo.mjs";
import IconPhoto from "@tabler/icons-react/dist/esm/icons/IconPhoto.mjs";
import IconTrendingUp from "@tabler/icons-react/dist/esm/icons/IconTrendingUp.mjs";

import formatYear from "../../helpers/format/formatYear";
import formatRuntime from "../../helpers/format/formatRuntime";
import getMovieCertification from "../../helpers/movie/getMovieCertification";
import getMovieTrailer from "../../helpers/movie/getMovieTrailer";
import getMovieGenre from "../../helpers/movie/getMovieGenre";
import formatTwoDecimal from "../../helpers/format/formatTwoDecimal";

const MovieHero = ({ appendDetails, isAppendLoading }) => {
  console.log(appendDetails);

  const { PH: phCertification, US: usCertification } = getMovieCertification(
    appendDetails,
    isAppendLoading,
  );

  const { trailerKey } = getMovieTrailer(appendDetails, isAppendLoading);

  if (isAppendLoading) return;

  const {
    title,
    release_date,
    runtime,
    poster_path,
    overview,
    vote_average,
    vote_count,
    popularity,
    credits: { cast, crew },
  } = appendDetails;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-bold">{title}</p>
        <ul className="flex gap-4">
          <li className="flex items-center gap-1">
            <IconPointFilled className="h-4 w-4" />
            {formatYear(release_date)}
          </li>
          <li className="flex items-center gap-1">
            <IconPointFilled className="h-4 w-4" />
            {formatRuntime(runtime)}
          </li>
          <li className="flex items-center gap-1">
            <IconPointFilled className="h-4 w-4" />
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
          </li>
        </ul>
      </div>
      <div className="-mx-4 flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <iframe
            className="h-[20rem] w-full bg-black md:h-[25rem] lg:h-[90%] xl:h-[90%]"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="flex font-bold uppercase">
            <div className="flex basis-[50%] items-center justify-center gap-2 rounded-full bg-[var(--bg-neutral)] p-3 text-center">
              <IconVideo className="h-5 w-5" />
              videos
            </div>
            <div className="flex basis-[50%] items-center justify-center gap-2 rounded-full bg-[var(--bg-neutral)] p-3 text-center">
              <IconPhoto className="h-5 w-5" />
              photos
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex w-full gap-2 px-4">
              <div className="w-[30%] shrink-0">
                <img
                  src={`http://image.tmdb.org/t/p/w500${poster_path}`}
                  alt=""
                  className="h-[10rem] w-[6rem] rounded-md"
                />
              </div>
              <div className="flex w-[70%] flex-col gap-4">
                {!isAppendLoading && (
                  <ul className="scrollable-content flex w-full gap-2 overflow-x-scroll">
                    {getMovieGenre(appendDetails).map((x) => (
                      <li className="w-fit shrink-0 rounded-full border border-gray-500 px-5 py-1 font-medium">
                        {x}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-base">{overview}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 px-4">
              <div className="flex items-center gap-2">
                <IconStarFilled className="h-5 w-5 text-[var(--brand-color-500)]" />
                <p className="text-sm font-medium">
                  {formatTwoDecimal(vote_average)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-full border-2 border-green-500 p-[.1rem]">
                  <IconTrendingUp className="h-4 w-4 text-green-300" />
                </div>
                <p className="text-sm font-medium">{popularity}</p>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center gap-6 px-4">
            <div className="flex items-center gap-1">
              <IconStarFilled className="h-5 w-5 text-[var(--brand-color-500)]" />
              <p className="text-sm font-medium">
                {formatTwoDecimal(vote_average)}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center rounded-full border-2 border-green-500 p-[.1rem]">
                <IconTrendingUp className="h-4 w-4 text-green-300" />
              </div>
              <p className="text-sm font-medium">{popularity}</p>
            </div>
          </div> */}
          <div className="flex flex-col px-4">
            <div className="flex border-b border-t py-4">
              <p className="w-[30%] font-bold">Director:</p>
              <ul className="flex w-full flex-wrap gap-2">
                {crew
                  .filter((crew) => crew.job === "Director")
                  .map((crew, index) => (
                    <li>
                      {crew.name} {index !== 1 && <span>,</span>}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex border-b py-4">
              <p className="w-[30%] font-bold">Writer:</p>
              <ul className="flex w-full flex-wrap gap-2">
                {crew
                  .filter((crew) => crew.known_for_department === "Writing")
                  .slice(0, 2)
                  .map((crew, index) => (
                    <li>
                      {crew.name}
                      {index !== 1 && <span>,</span>}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex border-b py-4">
              <p className="w-[30%] font-bold">Stars:</p>
              <ul className="flex w-full flex-wrap gap-2">
                {cast.slice(0, 5).map((cast, index) => (
                  <li>
                    {cast.name}
                    {index !== 1 && <span>,</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;