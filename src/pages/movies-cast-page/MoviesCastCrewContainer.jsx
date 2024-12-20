import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieApi from "../../hooks/axios/useMovieApi";
import getCastCrew from "../../helpers/movie/getCastCrew";
import formatYear from "../../helpers/format/formatYear";

import MovieCast from "../../components/shared/movie/MovieCast";

const MoviesCastCrewContainer = () => {
  const { movieID } = useParams();
  const { movieData, isLoading, handleSpecificEndpoint } = useMovieApi();

  useEffect(() => {
    handleSpecificEndpoint(movieID);
  }, [movieID]);

  if (isLoading) return;

  const { title, release_date, poster_path, credits } = movieData;

  const {
    acting: actor,
    director,
    writer,
    executiveProducer,
    producer,
  } = getCastCrew(credits);

  return (
    <div className="px-4">
      <div className="flex gap-2 rounded-lg bg-[var(--bg-neutral)]">
        <div className="w-[25%] md:w-[12%] xl:w-[8%]">
          <img
            src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 py-2">
          <p className="text-xl font-light xl:text-2xl">Full Cast & Crew</p>

          <div className="flex flex-col gap-1 font-medium">
            <p className="lg:text-lg xl:text-xl">{title}</p>
            <p className="text-[.75rem] lg:text-sm">
              ({formatYear(release_date)})
            </p>
          </div>
        </div>
      </div>
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
      {Object.entries(getCastCrew(credits))
        .filter(([_, value]) => {
          return value.some(
            (people) =>
              people.known_for_department !== "Acting" &&
              people.known_for_department !== "Directing" &&
              people.job !== "Writer" &&
              people.job !== "Executive Producer" &&
              people.job !== "Producer",
          );
        })
        .sort()
        .map(([key, value]) => {
          return (
            <div>
              <p>
                <MovieCast
                  department={value}
                  singularText={`${key
                    .split(/(?=[A-Z])/)
                    .join(" ")
                    .replace(/(^\w)/, (first) => first.toUpperCase())}`}
                  pluralText={`${key
                    .split(/(?=[A-Z])/)
                    .join(" ")
                    .replace(/(^\w)/, (first) => first.toUpperCase())}s`}
                />
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default MoviesCastCrewContainer;
