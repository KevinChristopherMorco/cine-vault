import React from "react";
import IconPhotoOff from "@tabler/icons-react/dist/esm/icons/IconPhotoOff.mjs";

const HeroPoster = ({ poster_path }) => {
  return (
    <div className="px-4 py-6 md:col-start-1 md:row-start-2 md:px-0 md:py-0">
      {poster_path ? (
        <img
          src={`http://image.tmdb.org/t/p/w500${poster_path}`}
          alt="Movie Poster"
          className="w-full rounded-md"
        />
      ) : (
        <div className="flex h-[8rem] w-full flex-col items-center justify-center gap-4 rounded-md bg-[var(--bg-neutral)] text-center md:h-[15rem] lg:h-[18rem] xl:h-[22rem]">
          <IconPhotoOff />
          <p className="text-[.7rem]">No poster available</p>
        </div>
      )}
    </div>
  );
};

export default HeroPoster;
