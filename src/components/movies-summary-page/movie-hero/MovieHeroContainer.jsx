import React from "react";

import getMovieCertification from "../../../helpers/movie/getMovieCertification";
import getMovieTrailer from "../../../helpers/movie/getMovieTrailer";
import getCastCrew from "../../../helpers/movie/getCastCrew";

import HeroHeading from "./HeroHeading";
import HeroTrailer from "./HeroTrailer";
import HeroPoster from "./HeroPoster";
import HeroOverview from "./HeroOverview";
import HeroStatCount from "./HeroStatCount";
import HeroCastCrew from "./HeroCastCrew";

const MovieHero = ({ movieData, isLoading }) => {
  const { PH: phCertification, US: usCertification } = getMovieCertification(
    movieData,
    isLoading,
  );

  if (isLoading) return;

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
  } = movieData;

  const { trailerKey } = getMovieTrailer(movieData, isLoading);
  const { acting: actor, director, writer } = getCastCrew(credits);

  return (
    <div className="flex flex-col gap-8 md:px-5 xl:px-8">
      <div className="-mx-4 grid h-full auto-rows-auto grid-cols-[30%_70%] md:grid-cols-[30%_70%] md:grid-rows-[5rem_1fr_40px] md:gap-y-2 lg:grid-cols-[1fr_3fr_0.6fr] lg:grid-rows-[5rem_1fr] lg:gap-x-3 lg:gap-y-4">
        <HeroHeading
          title={title}
          release_date={release_date}
          runtime={runtime}
          usCertification={usCertification}
          phCertification={phCertification}
          vote_average={vote_average}
          vote_count={vote_count}
          popularity={popularity}
        />

        <HeroTrailer
          trailerKey={trailerKey}
          movieVideos={movieVideos}
          backdrops={backdrops}
          logos={logos}
          posters={posters}
        />

        <HeroPoster poster_path={poster_path} />

        <HeroOverview
          isLoading={isLoading}
          movieData={movieData}
          overview={overview}
        />

        <HeroStatCount
          vote_average={vote_average}
          vote_count={vote_count}
          popularity={popularity}
        />

        <HeroCastCrew director={director} writer={writer} actor={actor} />
      </div>
    </div>
  );
};

export default MovieHero;
