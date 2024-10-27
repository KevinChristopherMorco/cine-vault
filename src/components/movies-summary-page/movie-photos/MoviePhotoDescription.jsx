import React from "react";
import getCastCrew from "../../../helpers/movie/getCastCrew";
import formatYear from "../../../helpers/format/formatYear";

const MoviePhotoDescription = ({ movieData }) => {
  const { title, credits, release_date } = movieData;

  const { acting: actor, director, writer } = getCastCrew(credits);
  
  return (
    <div className="flex w-full flex-col gap-4 bg-[var(--bg-neutral)] px-2 py-4">
      <div className="flex items-center gap-2">
        <p className="text-base font-medium">{title}</p>
        <p className="text-[.75rem]">({formatYear(release_date)})</p>
      </div>
      <div className="w-full border-t border-gray-500"></div>
      <div className="my-4 grid grid-cols-[1fr_2fr] gap-y-4">
        <div className="col-span-2 flex flex-col gap-5 text-sm">
          {director && director.length > 0 && (
            <div className="flex">
              <p className="w-[30%] font-bold md:w-[15%]">
                {director.length > 1 ? "Directors:" : "Director:"}
              </p>
              <ul className="flex w-full flex-wrap gap-2">
                {director.map((crew, index) => (
                  <li key={index}>
                    {crew.name}{" "}
                    {index !== director.length - 1 && <span>,</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {writer && writer.length > 0 && (
            <div className="flex">
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
            <div className="flex">
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
      </div>
    </div>
  );
};

export default MoviePhotoDescription;
