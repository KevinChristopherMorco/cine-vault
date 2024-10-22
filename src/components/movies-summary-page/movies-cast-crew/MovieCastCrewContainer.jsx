import React from "react";
import IconUserExclamation from "@tabler/icons-react/dist/esm/icons/IconUserExclamation.mjs";

import getCastCrew from "../../../helpers/movie/getCastCrew";

import MainHeading from "../../shared/headings/MainHeading";

const MovieCastCrewContainer = ({ movieData, isLoading }) => {
  if (isLoading) return;
  const { credits } = movieData;

  const { acting: actor, writer, director } = getCastCrew(credits);
  console.log(getCastCrew(credits));

  return (
    <div className="flex flex-col gap-8 lg:row-start-2">
      <MainHeading title={"Top Cast"} isLink={true} />
      {actor.length > 0 && (
        <div className="scrollable-content flex gap-4 overflow-x-scroll lg:grid lg:grid-cols-2">
          {actor.slice(0, 10).map((cast, index) => {
            return (
              <div key={index} className="shrink-0">
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  {cast.profile_path ? (
                    <div
                      alt={cast.name}
                      className="h-[10rem] w-[10rem] rounded-full bg-cover bg-center lg:h-[7rem] lg:w-[7rem]"
                      style={{
                        backgroundImage: `url(http://image.tmdb.org/t/p/w500${cast.profile_path})`,
                      }}
                    />
                  ) : (
                    <div
                      alt={cast.name}
                      className="flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-[var(--bg-neutral)] bg-cover bg-center lg:h-[7rem] lg:w-[7rem]"
                    >
                      <IconUserExclamation className="h-[5rem] w-[5rem] lg:h-[3rem] lg:w-[3rem]" />
                    </div>
                  )}

                  <div className="flex flex-col gap-1 text-center lg:text-left">
                    <p className="font-medium">{cast.name}</p>
                    <p className="font-light text-gray-400">{cast.character}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="col-span-2 flex flex-col">
        {director && director.length > 0 && (
          <div className="flex gap-4 border-b border-t py-4">
            <p className="w-[30%] font-bold md:w-[15%]">
              {director.length > 1 ? "Directors:" : "Director:"}
            </p>
            <ul className="flex w-full flex-wrap gap-2">
              {director.map((crew, index) => (
                <li key={index}>
                  {crew.name} {index !== director.length - 1 && <span>,</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {writer && writer.length > 0 && (
          <div className="flex gap-4 border-b border-t py-4">
            <p className="w-[30%] font-bold md:w-[15%]">
              {writer.length > 1 ? "Writers:" : "Writer:"}
            </p>
            <ul className="flex w-full flex-wrap gap-2">
              {writer.map((crew, index) => (
                <li key={index}>
                  {crew.name}
                  {index !== writer.length - 1 && <span>,</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {actor && actor.length > 0 && (
          <div className="flex gap-4 border-b border-t py-4">
            <p className="w-[30%] font-bold md:w-[15%]">
              {actor.length > 1 ? "Stars:" : "Star:"}
            </p>
            <ul className="flex w-full flex-wrap gap-2">
              {actor.slice(0, 10).map((cast, index) => (
                <li key={index}>
                  {cast.name}
                  {index < 9 && <span>,</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex border-b py-4">
          <p className="w-fit font-bold text-[var(--brand-color-400)]">
            See all cast & crew
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCastCrewContainer;
