import React from "react";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";
import IconUserExclamation from "@tabler/icons-react/dist/esm/icons/IconUserExclamation.mjs";

const MovieCastCrewContainer = ({ appendDetails, isAppendLoading }) => {
  if (isAppendLoading) return;
  const {
    credits: { cast, crew },
  } = appendDetails;
  console.log(cast);

  return (
    <div className="flex flex-col gap-8">
      <div className="group flex w-fit cursor-pointer items-center gap-2 border-l-4 border-[var(--brand-color-500)] px-2 transition-colors">
        <p className="text-xl font-bold">Top Casts</p>
        <IconChevronRight className="h-5 w-5 group-hover:text-[var(--brand-color-500)]" />
      </div>
      {cast.length > 0 && (
        <div className="scrollable-content flex gap-4 overflow-x-scroll">
          {cast.slice(0, 10).map((cast, index) => {
            return (
              <div key={index} className="shrink-0">
                <div className="flex flex-col gap-4">
                  {cast.profile_path ? (
                    <div
                      alt={cast.name}
                      className="h-[10rem] w-[10rem] rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(http://image.tmdb.org/t/p/w500${cast.profile_path})`,
                      }}
                    />
                  ) : (
                    <div
                      alt={cast.name}
                      className="flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-[var(--bg-neutral)] bg-cover bg-center"
                    >
                      <IconUserExclamation className="h-[5rem] w-[5rem]" />
                    </div>
                  )}

                  <div className="flex flex-col gap-1 text-center">
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
        <div className="flex border-b border-t py-4">
          <p className="w-[30%] font-bold md:w-[15%]">Director:</p>
          <ul className="flex w-full flex-wrap gap-2">
            {crew
              .filter((crew) => crew.job === "Director")
              .map((crew, index) => (
                <li key={index}>
                  {crew.name} {index !== 1 && <span>,</span>}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <div className="flex border-b py-4">
            <p className="w-[30%] font-bold md:w-[15%]">Writer:</p>
            <ul className="flex w-full flex-wrap gap-2">
              {crew
                .filter((crew) => crew.known_for_department === "Writing")
                .slice(0, 2)
                .map((crew, index) => (
                  <li key={index}>
                    {crew.name}
                    {index !== 1 && <span>,</span>}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex border-b py-4">
            <p className="w-[50%] font-bold text-[var(--brand-color-400)] md:w-[20%]">
              See all cast & crew
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCastCrewContainer;
