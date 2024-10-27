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

  return (
    <div className="flex flex-col gap-8 lg:-mx-6">
      <div className="relative -mx-4 grid h-full auto-rows-auto grid-cols-[30%_70%] py-4 md:grid-cols-[30%_70%] md:grid-rows-[5rem_1fr_40px] md:gap-y-2 lg:grid-cols-[1fr_3fr_0.6fr] lg:grid-rows-[5rem_1fr] lg:gap-x-3 lg:gap-y-4 lg:p-8">
        <div
          className="absolute inset-0 bg-cover bg-center before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-black before:bg-opacity-30 before:backdrop-blur-3xl before:content-['']"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/w500${movieData.backdrop_path})`,
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

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
