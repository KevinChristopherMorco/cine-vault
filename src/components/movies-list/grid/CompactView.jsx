import React from "react";

import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";

import getMovieCertification from "../../../helpers/movie/getMovieCertification";
import formatVoteAverage from "../../../helpers/format/formatVoteAverage";
import formatRuntime from "../../../helpers/format/formatRuntime";
import formatYear from "../../../helpers/format/formatYear";

const CompactView = ({ allMovieList, isLoading }) => {
  return (
    <div className="flex flex-col gap-4 px-4 pb-8">
      {allMovieList.map((movie, index) => {
        const {
          title,
          poster_path,
          release_date,
          runtime,
          vote_average,
          vote_count,
        } = movie.data;
        const { US: usCertification, PH: phCertification } =
          getMovieCertification(movie.data, isLoading);
        return (
          <div key={index} className="flex animate-fadeIn gap-2">
            <div className="relative w-fit before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-15">
              <img
                src={`http://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
                className="h-[6rem] w-[5rem] rounded-md md:h-[8rem] md:w-[5rem] lg:h-[9rem] lg:w-[6rem]"
              />
              <p className="text-stroke absolute bottom-0 right-0 text-2xl font-bold text-black md:text-4xl">
                {index + 1}
              </p>
            </div>
            <div className="flex flex-col gap-4 px-2">
              <div className="flex flex-col gap-2">
                <p className="cursor-pointer text-sm font-bold transition-colors hover:text-[var(--brand-color-500)] md:text-base lg:text-lg">
                  {title}
                </p>
                <ul className="flex gap-2 text-[.8rem] text-gray-300 md:text-[.9rem] lg:text-base">
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
              <div className="flex items-center gap-2 text-[.75rem] md:text-[.9rem] lg:text-base">
                <div className="flex items-center gap-1">
                  <span>
                    <IconStarFilled className="h-3 w-3 text-[var(--brand-color-500)]" />
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
