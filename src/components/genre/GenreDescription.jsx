import React from "react";

const GenreDescription = ({ genreName, genreDescription }) => {
  return (
    <div className="z-[10] flex flex-col gap-4 px-4 md:px-0">
      <p className="text-2xl font-bold text-[var(--brand-color-300)]">
        {genreName}
      </p>
      <p>{genreDescription}</p>
    </div>
  );
};

export default GenreDescription;
