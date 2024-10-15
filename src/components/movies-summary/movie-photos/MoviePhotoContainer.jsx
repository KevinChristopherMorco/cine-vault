import React from "react";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

import useScreenResponsiveness from "../../../hooks/shared/useScreenResponsiveness";

const MoviePhotoContainer = ({ appendDetails, isAppendLoading }) => {
  if (isAppendLoading) return;
  const {
    title,
    images: { backdrops },
  } = appendDetails;
  const {
    screenSize: { lg, xl, xxl },
  } = useScreenResponsiveness();

  const photoSlice = () => {
    if (lg) return backdrops.slice(0, 6);
    if (xl || xxl) return backdrops.slice(0, 8);

    return backdrops.slice(0, 4);
  };

  return (
    <div className="flex flex-col gap-8 lg:row-start-1">
      <div className="group flex w-fit cursor-pointer items-center gap-2 border-l-4 border-[var(--brand-color-500)] px-2 transition-colors">
        <p className="text-xl font-bold">Photos</p>
        <IconChevronRight className="h-5 w-5 group-hover:text-[var(--brand-color-500)]" />
      </div>
      <div className="grid grid-cols-2 gap-1 md:auto-rows-auto md:gap-2 lg:auto-rows-auto lg:grid-cols-3">
        {photoSlice().map((image) => {
          return (
            <img
              src={`http://image.tmdb.org/t/p/w500${image.file_path}`}
              alt={title}
              className="w-full cursor-pointer md:h-[10rem] lg:h-[12rem]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoviePhotoContainer;
