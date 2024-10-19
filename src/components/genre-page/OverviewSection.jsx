import React from "react";

import MainHeading from "../shared/headings/MainHeading";
import GenreMoviesPreview from "./GenreMoviesPreview";

const OverviewSection = ({ genreID, genreName, genreOverview, movieData }) => {
  return (
    <div className="flex flex-col gap-6 bg-[var(--bg-neutral)] p-4 md:col-span-2 md:grid md:grid-cols-[40%_60%] md:gap-x-2 md:gap-y-8">
      <MainHeading
        title={`Latest & Upcoming ${genreName} Movies`}
        isLink={false}
      />
      <div className="flex flex-col gap-10 md:row-start-2">
        <p>{genreOverview}</p>
        <p className="w-fit cursor-pointer text-[var(--brand-color-200)] transition-colors hover:text-[var(--brand-color-300)]">
          See the list
        </p>
      </div>
      <GenreMoviesPreview movieData={movieData} genreID={genreID} />
    </div>
  );
};

export default OverviewSection;
