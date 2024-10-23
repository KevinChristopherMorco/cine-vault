import React from "react";

import getCastCrew from "../../../helpers/movie/getCastCrew";

import MovieCast from "../../shared/movie/MovieCast";

const HeroCastCrew = ({ movieData, isLoading }) => {
  const { credits } = movieData;
  const { acting: actor, director, writer } = getCastCrew(credits);

  return (
    <div className="col-span-2 flex flex-col px-4 py-6 text-sm md:px-0 lg:row-start-4">
      {director && director.length > 0 && (
        <MovieCast
          department={director}
          singularText={"Director"}
          pluralText={"Directors"}
          isPreview={true}
        />
      )}
      {writer && writer.length > 0 && (
        <MovieCast
          department={writer}
          singularText={"Writer"}
          pluralText={"Writers"}
          isPreview={true}
        />
      )}

      {actor && actor.length > 0 && (
        <MovieCast
          department={actor}
          singularText={"Actor"}
          pluralText={"Actors"}
          isPreview={true}
          slice={actor.slice(0, 10)}
        />
      )}
    </div>
  );
};

export default HeroCastCrew;
