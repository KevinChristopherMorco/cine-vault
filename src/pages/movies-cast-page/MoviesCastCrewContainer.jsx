import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieApi from "../../hooks/axios/useMovieApi";
import getCastCrew from "../../helpers/movie/getCastCrew";
import MovieCast from "../../components/shared/movie/MovieCast";

const MoviesCastCrewContainer = () => {
  const { movieID } = useParams();
  const { movieData, isLoading, handleSpecificEndpoint } = useMovieApi();
  console.log(movieData);

  useEffect(() => {
    handleSpecificEndpoint(movieID);
  }, [movieID]);

  if (isLoading) return;

  const { credits } = movieData;

  const {
    acting: actor,
    director,
    writer,
    executiveProducer,
    producer,
  } = getCastCrew(credits);

  return (
    <div>
      {director && director.length > 0 && (
        <MovieCast
          department={director}
          singularText={"Director"}
          pluralText={"Directors"}
        />
      )}
      {writer && writer.length > 0 && (
        <MovieCast
          department={writer}
          singularText={"Writer"}
          pluralText={"Writers"}
        />
      )}
      {actor && actor.length > 0 && (
        <MovieCast
          department={actor}
          singularText={"Actor"}
          pluralText={"Actors"}
        />
      )}

      {executiveProducer && executiveProducer.length > 0 && (
        <MovieCast
          department={executiveProducer}
          singularText={"Exceutive Producer"}
          pluralText={"Exceutive Producers"}
        />
      )}
      {producer && producer.length > 0 && (
        <MovieCast
          department={producer}
          singularText={"Producer"}
          pluralText={"Producers"}
        />
      )}
      {Object.entries(getCastCrew(credits)).map(([key, value]) => {
        return (
          <div>
            {/* <p>
              {key
                .split(/(?=[A-Z])/)
                .join(" ")
                .replace(/(^\w)/, (first) => first.toUpperCase())}
            </p>
            <p>
              {value.map((x) => {
                return x.name;
              })}
            </p> */}
          </div>
        );
      })}
    </div>
  );
};

export default MoviesCastCrewContainer;
