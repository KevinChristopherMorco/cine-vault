import React from "react";
import MainHeading from "../shared/headings/MainHeading";

const MovieGenreHeader = ({ genreName, genreOverview }) => {
  return (
    <div className="col-span-2 col-start-1 -mx-4 flex flex-col gap-6 bg-[var(--bg-neutral)] px-4 py-8">
      <MainHeading
        title={`Latest & Upcoming ${genreName} Movies`}
        isLink={false}
      />
      <p className="">{genreOverview}</p>
    </div>
  );
};

export default MovieGenreHeader;
