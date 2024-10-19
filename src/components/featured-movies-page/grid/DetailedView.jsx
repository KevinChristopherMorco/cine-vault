import React from "react";
import { useParams } from "react-router-dom";

import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";

import formatVoteAverage from "../../../helpers/format/formatVoteAverage";
import formatRuntime from "../../../helpers/format/formatRuntime";
import formatYear from "../../../helpers/format/formatYear";
import getMovieCertification from "../../../helpers/movie/getMovieCertification";

const DetailedView = ({ allMovieList, isLoading }) => {
  return (
    <div className="flex flex-col px-4 pb-8">
      {allMovieList.map((movie, index) => {
        const {
          title,
          poster_path,
          release_date,
          runtime,
          vote_average,
          vote_count,
          overview,
          credits: { cast, crew },
        } = movie.data;

        const { US: usCertification, PH: phCertification } =
          getMovieCertification(movie.data, isLoading);

        return (
          <div
            key={index}
            className="flex animate-fadeIn flex-col gap-4 border-b border-[var(--brand-color-500)] py-6"
          >
            <div className="flex gap-2">
              <div className="relative w-fit cursor-pointer before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-15">
                <img
                  src={`http://image.tmdb.org/t/p/w500${poster_path}`}
                  alt=""
                  className="h-[6rem] w-[5rem] rounded-md md:h-[7rem] md:w-[5rem]"
                />
                <p className="text-stroke absolute bottom-0 right-0 text-2xl font-bold text-black md:text-4xl">
                  {index + 1}
                </p>
              </div>
              <div className="flex flex-col gap-4 px-2">
                <div className="flex flex-col gap-2">
                  <p className="cursor-pointer text-sm font-bold transition-colors hover:text-[var(--brand-color-500)] md:text-base">
                    {title}
                  </p>
                  <ul className="flex gap-2 text-[.8rem] text-gray-300 md:text-[.9rem]">
                    <li>{formatYear(release_date)}</li>
                    <li>{formatRuntime(runtime)}</li>
                    <li>
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
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span>
                      <IconStarFilled className="h-3 w-3 text-[var(--star-color)]" />
                    </span>
                    <p className="text-[.75rem]">
                      {formatVoteAverage(vote_average)}
                    </p>
                  </div>
                  <p className="text-[.75rem] text-gray-300">({vote_count})</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="line-clamp-4 text-[.75rem] md:text-sm">
                {overview}
              </p>
              <div className="flex gap-2">
                <div className="flex flex-wrap gap-1">
                  <p className="text-[.75rem] font-bold md:text-sm">
                    Directed By:
                  </p>
                  {crew.slice(0, 1).map((crew, index) => (
                    <p key={index} className="text-[.75rem] text-gray-300">
                      {crew.name}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  <p className="text-[.75rem] font-bold">Stars:</p>
                  {cast.slice(0, 2).map((cast, index) => (
                    <p key={index} className="text-[.75rem] text-gray-300">
                      {cast.name} {index !== 1 && <span>,</span>}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailedView;
