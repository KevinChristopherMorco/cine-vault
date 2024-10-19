import React from "react";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

import useScreenResponsiveness from "../../../hooks/shared/useScreenResponsiveness";
import MainHeading from "../../shared/headings/MainHeading";

const MoviePhotoContainer = ({ movieData, isLoading }) => {
  if (isLoading) return;
  const {
    title,
    images: { backdrops },
  } = movieData;
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
      <MainHeading title={"Photos"} isLink={true} />
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
