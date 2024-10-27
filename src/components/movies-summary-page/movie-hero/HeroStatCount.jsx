import React from "react";

import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconTrendingUp from "@tabler/icons-react/dist/esm/icons/IconTrendingUp.mjs";

import useScreenResponsiveness from "../../../hooks/shared/useScreenResponsiveness";

import formatTwoDecimal from "../../../helpers/format/formatTwoDecimal";

const HeroStatCount = ({ movieData, isLoading }) => {
  const {
    screenSize: { sm, md },
  } = useScreenResponsiveness();

  const { vote_average, vote_count, popularity } = movieData;

  return (
    (sm || md) && (
      <div className="relative col-span-2 flex items-center gap-6 px-4 text-[.8rem] md:px-0 lg:row-start-3">
        <div className="flex items-center gap-2">
          <IconStarFilled className="h-5 w-5 text-[var(--brand-color-500)]" />
          <div className="flex items-center gap-2">
            <p className="font-medium">
              {vote_average ? formatTwoDecimal(vote_average) : 0}
            </p>
            <p className="text-gray-400">
              (
              {vote_count ? formatTwoDecimal(vote_count) : "No recorded voters"}
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
    )
  );
};

export default HeroStatCount;
