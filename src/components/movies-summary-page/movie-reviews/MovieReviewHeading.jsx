import React from "react";

import formatYear from "../../../helpers/format/formatYear";

const MovieReviewHeading = ({ movieData }) => {
  const { title, release_date, poster_path } = movieData;
  return (
    <div className="flex gap-2 rounded-lg bg-[var(--bg-neutral)]">
      <div className="w-[25%] md:w-[12%] xl:w-[15%]">
        <img
          src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-4 py-2">
        <p className="text-xl font-bold">User Reviews</p>

        <div className="flex flex-col gap-1">
          <p className="font-medium lg:text-lg">{title}</p>
          <p className="text-[.75rem] lg:text-sm">
            ({formatYear(release_date)})
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieReviewHeading;
