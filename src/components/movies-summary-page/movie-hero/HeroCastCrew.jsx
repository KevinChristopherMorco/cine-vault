import React from "react";

import getCastCrew from "../../../helpers/movie/getCastCrew";

const HeroCastCrew = ({ movieData, isLoading }) => {
  const { credits } = movieData;
  const { acting: actor, director, writer } = getCastCrew(credits);

  return (
    <div className="col-span-2 flex flex-col px-4 py-6 text-sm md:px-0 lg:row-start-4">
      {director && director.length > 0 && (
        <div className="flex border-b border-t py-4">
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
        <div className="flex border-b border-t py-4">
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
        <div className="flex border-b border-t py-4">
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
    </div>
  );
};

export default HeroCastCrew;
