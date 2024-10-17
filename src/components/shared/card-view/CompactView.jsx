import React from "react";
import { Link } from "react-router-dom";

import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";

import getMovieCertification from "../../../helpers/movie/getMovieCertification";
import formatVoteAverage from "../../../helpers/format/formatVoteAverage";
import formatRuntime from "../../../helpers/format/formatRuntime";
import formatYear from "../../../helpers/format/formatYear";

const CompactView = ({ movieData, isLoading }) => {
  console.log(movieData);
  if (isLoading) return;
  return (
    <div className="col-span-2 flex flex-col gap-4 lg:col-span-1 lg:col-start-1">
      {movieData.results.map((movie, index) => {
        const {
          id,
          title,
          poster_path,
          release_date,
          runtime,
          vote_average,
          vote_count,
        } = movie;
        // const { US: usCertification, PH: phCertification } =
        //   getMovieCertification(movie, isLoading);
        return (
          <div key={index} className="flex animate-fadeIn gap-2">
            <div className="relative w-fit cursor-pointer before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-15">
              <img
                src={`http://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
                className="h-[6rem] w-[5rem] rounded-md md:h-[8rem] md:w-[5rem] lg:h-[9rem] lg:w-[6rem]"
              />
            </div>
            <div className="flex flex-col gap-4 px-2">
              <div className="flex flex-col gap-2">
                <Link
                  to={`/movies-summary/${id}`}
                  className="cursor-pointer text-sm font-bold transition-colors hover:text-[var(--brand-color-500)] md:text-base lg:text-lg"
                >
                  {title}
                </Link>
                <ul className="flex gap-2 text-[.8rem] text-gray-300 md:text-[.9rem] lg:text-base">
                  <li>{formatYear(release_date)}</li>
                  <li>{formatRuntime(runtime)}</li>
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
              <div className="flex items-center gap-2 text-[.75rem] md:text-[.9rem] lg:text-base">
                <div className="flex items-center gap-1">
                  <span>
                    <IconStarFilled className="h-3 w-3 text-[var(--star-color)]" />
                  </span>
                  <p className="">{formatVoteAverage(vote_average)}</p>
                </div>
                <p className="text-gray-300">({vote_count})</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompactView;
