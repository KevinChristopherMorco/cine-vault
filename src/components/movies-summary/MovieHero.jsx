import React from "react";

import IconPointFilled from "@tabler/icons-react/dist/esm/icons/IconPointFilled.mjs";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconVideo from "@tabler/icons-react/dist/esm/icons/IconVideo.mjs";
import IconLibraryPhoto from "@tabler/icons-react/dist/esm/icons/IconLibraryPhoto.mjs";
import IconTrendingUp from "@tabler/icons-react/dist/esm/icons/IconTrendingUp.mjs";
import IconPhotoOff from "@tabler/icons-react/dist/esm/icons/IconPhotoOff.mjs";
import IconVideoOff from "@tabler/icons-react/dist/esm/icons/IconVideoOff.mjs";

import useScreenResponsiveness from "../../hooks/shared/useScreenResponsiveness";
import formatYear from "../../helpers/format/formatYear";
import formatRuntime from "../../helpers/format/formatRuntime";
import formatTwoDecimal from "../../helpers/format/formatTwoDecimal";
import getMovieCertification from "../../helpers/movie/getMovieCertification";
import getMovieTrailer from "../../helpers/movie/getMovieTrailer";
import getMovieGenre from "../../helpers/movie/getMovieGenre";
import getCastCrew from "../../helpers/movie/getCastCrew";

import Empty from "../alerts/Empty";
import { Link } from "react-router-dom";

const MovieHero = ({ appendDetails, isAppendLoading }) => {
  const { PH: phCertification, US: usCertification } = getMovieCertification(
    appendDetails,
    isAppendLoading,
  );

  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();

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
    images: { backdrops, logos, posters },

    credits,
    videos: { results: movieVideos },
  } = appendDetails;

  const { trailerKey } = getMovieTrailer(appendDetails, isAppendLoading);

  const { acting: actor, director, writer } = getCastCrew(credits);

  return (
    <div className="flex flex-col gap-8 md:px-5 xl:px-8">
      <div className="-mx-4 grid h-full auto-rows-auto grid-cols-[30%_70%] md:grid-cols-[30%_70%] md:grid-rows-[5rem_1fr_40px] md:gap-y-2 lg:grid-cols-[1fr_3fr_0.6fr] lg:grid-rows-[5rem_1fr] lg:gap-x-3 lg:gap-y-4">
        <div className="col-span-2 md:row-start-1 lg:col-span-3 lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1 px-4 pb-4">
            <p className="text-2xl font-bold lg:text-2xl">
              {title ? title : "Title not available"}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-300 lg:text-base">
              <li className="flex items-center gap-1">
                <IconPointFilled className="h-4 w-4" />
                {release_date ? formatYear(release_date) : "No release date"}
              </li>
              <li className="flex items-center gap-1">
                <IconPointFilled className="h-4 w-4" />
                {runtime ? formatRuntime(runtime) : "Runtime not recorded"}
              </li>
              {usCertification || phCertification ? (
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
              ) : (
                <li className="flex items-center gap-1">
                  <IconPointFilled className="h-4 w-4" />
                  <p>Not Rated</p>
                </li>
              )}
            </ul>
          </div>
          {(lg || xl || xxl) && (
            <div className="col-span-2 row-start-3 flex h-full items-start gap-6 px-0 px-4 text-[.8rem]">
              {vote_average ? (
                <div className="grid grid-cols-[1rem] items-center gap-x-5 gap-y-2">
                  <div className="col-span-2">
                    <p className="font-bold uppercase">TMDB RATING</p>
                  </div>
                  <div className="row-start-2">
                    <IconStarFilled className="h-7 w-7 text-[var(--brand-color-500)]" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">
                        <span className="text-xl font-bold">
                          {formatTwoDecimal(vote_average)}{" "}
                        </span>{" "}
                        / 10
                      </p>
                    </div>
                    <div className="lg:row-start-3">
                      <p className="text-gray-400">
                        ({formatTwoDecimal(vote_count)})
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {vote_average ? (
                <div className="grid h-full grid-cols-[1rem] gap-x-4 gap-y-2">
                  <div className="col-span-2">
                    <p className="font-bold uppercase">Popularity</p>
                  </div>
                  <div className="row-start-2">
                    <div className="flex h-6 w-6 items-center rounded-full border-2 border-green-500 p-[.1rem]">
                      <IconTrendingUp className="h-5 w-5 text-green-300" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{popularity}</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>

        <>
          {trailerKey ? (
            <iframe
              className="col-span-2 h-[20rem] w-full bg-black md:col-span-1 md:col-start-2 md:row-start-2 md:h-[25rem] md:h-full lg:h-full"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="col-span-2 flex h-[20rem] w-full items-center justify-center bg-black md:col-span-1 md:col-start-2 md:row-start-2 md:h-[25rem] md:h-full lg:h-full">
              <Empty
                title={"No official trailer is available."}
                subtext={"You can check the video gallery for more videos."}
              />
            </div>
          )}

          <div className="col-span-2 flex font-bold uppercase lg:col-start-3 lg:row-start-2 lg:flex-col lg:gap-2">
            {movieVideos.length > 0 ? (
              <div className="flex basis-[50%] cursor-pointer items-center justify-center gap-2 rounded-full rounded-lg bg-[var(--bg-neutral)] p-3 text-center text-[.75rem] transition-all hover:bg-[var(--neutral-hover)] lg:flex-col">
                <IconVideo className="h-5 w-5" />
                <p>{movieVideos.length} videos</p>
              </div>
            ) : (
              <div className="flex basis-[50%] cursor-pointer items-center justify-center gap-2 rounded-full rounded-lg bg-[var(--bg-neutral)] p-3 text-center text-[.75rem] transition-all hover:bg-[var(--neutral-hover)] lg:flex-col">
                <IconVideoOff className="h-5 w-5" />
                <p>no videos found</p>
              </div>
            )}

            {backdrops.length > 0 || logos.length > 0 || posters.length > 0 ? (
              <div className="flex basis-[50%] cursor-pointer items-center justify-center gap-2 rounded-full rounded-lg bg-[var(--bg-neutral)] p-3 text-center text-[.75rem] transition-all hover:bg-[var(--neutral-hover)] lg:flex-col">
                <IconLibraryPhoto className="h-5 w-5" />
                photos
              </div>
            ) : (
              <div className="flex basis-[50%] cursor-pointer items-center justify-center gap-2 rounded-full rounded-lg bg-[var(--bg-neutral)] p-3 text-center text-[.75rem] transition-all hover:bg-[var(--neutral-hover)] lg:flex-col">
                <IconPhotoOff className="h-5 w-5" />
                no photos found
              </div>
            )}
          </div>
        </>

        <div className="px-4 py-6 md:col-start-1 md:row-start-2 md:px-0 md:py-0">
          {poster_path ? (
            <img
              src={`http://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              className="w-full rounded-md"
            />
          ) : (
            <div className="flex h-[8rem] w-full flex-col items-center justify-center gap-4 rounded-md bg-[var(--bg-neutral)] text-center md:h-[15rem] lg:h-[18rem] xl:h-[22rem]">
              <IconPhotoOff />
              <p className="text-[.7rem]">No poster available</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 py-6 pr-4 md:col-span-2 md:px-0 md:py-4 md:pr-0 lg:col-span-3 lg:row-start-3">
          {!isAppendLoading && (
            <ul className="scrollable-content flex w-full gap-2 overflow-x-scroll py-1">
              {getMovieGenre(appendDetails).map((genre, index) => (
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
        {(sm || md) && (
          <div className="col-span-2 flex items-center gap-6 px-4 text-[.8rem] md:px-0 lg:row-start-3">
            <div className="flex items-center gap-2">
              <IconStarFilled className="h-5 w-5 text-[var(--brand-color-500)]" />
              <div className="flex items-center gap-2">
                <p className="font-medium">
                  {vote_average ? formatTwoDecimal(vote_average) : 0}
                </p>
                <p className="text-gray-400">
                  (
                  {vote_count
                    ? formatTwoDecimal(vote_count)
                    : "No recorded voters"}
                  )
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-full border-2 border-green-500 p-[.1rem]">
                <IconTrendingUp className="h-4 w-4 text-green-300" />
              </div>
              <p className="font-medium">{popularity ? popularity : "0"}</p>
            </div>
          </div>
        )}

        <div className="col-span-2 flex flex-col px-4 py-6 text-sm md:px-0 lg:row-start-4">
          {director && (
            <div className="flex border-b border-t py-4">
              <p className="w-[30%] font-bold md:w-[15%]">Director:</p>
              <ul className="flex w-full flex-wrap gap-2">
                {director.map((crew, index) => (
                  <li key={index}>
                    {crew.name} {index > 0 && <span>,</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {writer && (
            <div className="flex border-b border-t py-4">
              <p className="w-[30%] font-bold md:w-[15%]">Writers:</p>
              <ul className="flex w-full flex-wrap gap-2">
                {writer.map((crew, index) => (
                  <li key={index}>
                    {crew.name}
                    {index >= 0 && index !== writer.length - 1 && (
                      <span>,</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {actor && (
            <div className="flex border-b border-t py-4">
              <p className="w-[30%] font-bold md:w-[15%]">Stars:</p>
              <ul className="flex w-full flex-wrap gap-2">
                {actor.slice(0, 10).map((cast, index) => (
                  <li key={index}>
                    {cast.name}
                    {index < 9 && <span>,</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieHero;
