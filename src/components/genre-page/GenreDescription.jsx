import React from "react";
import { Link } from "react-router-dom";
import IconChevronLeft from "@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs";

const GenreDescription = ({ genreName, genreDescription }) => {
  return (
    <div className="z-[10] flex flex-col gap-6 px-4 md:gap-8 md:px-0 lg:gap-10">
      <Link
        to={`/genre-list/`}
        className="group flex cursor-pointer items-center"
      >
        <IconChevronLeft className="transition-colors group-hover:text-[var(--brand-color-500)]" />
        <p className="font-medium lg:text-lg">All interests</p>
      </Link>
      <div className="flex flex-col gap-4 md:gap-8 md:pr-4 lg:gap-10">
        <p className="text-2xl font-bold text-[var(--brand-color-300)] md:text-3xl">
          {genreName}
        </p>
        <p className="text-base md:text-lg">{genreDescription}</p>
      </div>
    </div>
  );
};

export default GenreDescription;
