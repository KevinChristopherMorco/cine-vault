import React from "react";

import getCastCrew from "../../../helpers/movie/getCastCrew";

import HeroHeading from "./HeroHeading";
import HeroTrailer from "./HeroTrailer";
import HeroPoster from "./HeroPoster";
import HeroOverview from "./HeroOverview";
import HeroStatCount from "./HeroStatCount";
import HeroCastCrew from "./HeroCastCrew";

const MovieHero = ({ movieData, isLoading }) => {
  if (isLoading) return;

  const { vote_average, vote_count, popularity, credits } = movieData;

  const { acting: actor, director, writing: writer } = getCastCrew(credits);

  return (
    <div className="flex flex-col gap-8 md:px-5 xl:px-8">
      <div className="-mx-4 grid h-full auto-rows-auto grid-cols-[30%_70%] md:grid-cols-[30%_70%] md:grid-rows-[5rem_1fr_40px] md:gap-y-2 lg:grid-cols-[1fr_3fr_0.6fr] lg:grid-rows-[5rem_1fr] lg:gap-x-3 lg:gap-y-4">
        <HeroHeading movieData={movieData} isLoading={isLoading} />

        <HeroTrailer movieData={movieData} isLoading={isLoading} />

        <HeroPoster movieData={movieData} isLoading={isLoading} />

        <HeroOverview movieData={movieData} isLoading={isLoading} />

        <HeroStatCount movieData={movieData} isLoading={isLoading} />

        <HeroCastCrew movieData={movieData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default MovieHero;
