import React from "react";
import MainHeading from "../shared/headings/MainHeading";

const MovieGenreHeader = ({ genreName, genreOverview }) => {
  return (
    <div className="flex flex-col gap-6">
      <MainHeading
        title={`Latest & Upcoming ${genreName} Movies`}
        isLink={false}
      />
      <p className="">{genreOverview}</p>
    </div>
  );
};

export default MovieGenreHeader;
