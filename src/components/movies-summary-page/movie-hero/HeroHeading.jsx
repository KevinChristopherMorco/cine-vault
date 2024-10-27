import React from "react";
import IconPointFilled from "@tabler/icons-react/dist/esm/icons/IconPointFilled.mjs";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconTrendingUp from "@tabler/icons-react/dist/esm/icons/IconTrendingUp.mjs";

import formatYear from "../../../helpers/format/formatYear";
import formatRuntime from "../../../helpers/format/formatRuntime";
import formatTwoDecimal from "../../../helpers/format/formatTwoDecimal";
import useScreenResponsiveness from "../../../hooks/shared/useScreenResponsiveness";
import getMovieCertification from "../../../helpers/movie/getMovieCertification";

const HeroHeading = ({ movieData, isLoading }) => {
  const {
    screenSize: { lg, xl, xxl },
  } = useScreenResponsiveness();

  const { title, release_date, runtime, vote_average, vote_count, popularity } =
    movieData;

  const { PH: phCertification, US: usCertification } = getMovieCertification(
    movieData,
    isLoading,
  );
  return (
    <div className="relative col-span-2 md:row-start-1 lg:col-span-3 lg:flex lg:items-center lg:justify-between">
      <div className="flex flex-col gap-1 px-4 pb-4">
        <p className="text-2xl font-bold lg:text-2xl">
          {title || "Title not available"}
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
              <div className="flex items-center gap-1">
                <img
                  src={
                    usCertification
                      ? `https://em-content.zobj.net/source/facebook/200/flag-for-united-states_1f1fa-1f1f8.png`
                      : `https://em-content.zobj.net/source/facebook/65/flag-for-philippines_1f1f5-1f1ed.png`
                  }
                  className="h-3 w-3"
                  alt={
                    usCertification ? "US Certification" : "PH Certification"
                  }
                />
                <p>{usCertification || phCertification}</p>
              </div>
            </li>
          ) : (
            <li className="flex items-center gap-1">
              <IconPointFilled className="h-4 w-4" />
              <p>Not Rated</p>
            </li>
          )}
        </ul>
      </div>
      {(vote_average || popularity) && (lg || xl || xxl) && (
        <div className="col-span-2 row-start-3 flex h-full items-start gap-6 px-0 px-4 text-[.8rem]">
          {vote_average && (
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
          )}

          {popularity && (
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
          )}
        </div>
      )}
    </div>
  );
};

export default HeroHeading;
