import React from "react";


import getMovieCertification from "../../helpers/movie/getMovieCertification";
import getMovieTrailer from "../../helpers/movie/getMovieTrailer";
import getCastCrew from "../../helpers/movie/getCastCrew";


import HeroHeading from "./movie-hero/HeroHeading";
import HeroTrailer from "./movie-hero/HeroTrailer";
import HeroPoster from "./movie-hero/HeroPoster";
import HeroOverview from "./movie-hero/HeroOverview";
import HeroStatCount from "./movie-hero/HeroStatCount";
import HeroCastCrew from "./movie-hero/HeroCastCrew";

const MovieHero = ({ appendDetails, isAppendLoading }) => {
  const { PH: phCertification, US: usCertification } = getMovieCertification(
    appendDetails,
    isAppendLoading,
  );

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
          isAppendLoading={isAppendLoading}
          appendDetails={appendDetails}
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
