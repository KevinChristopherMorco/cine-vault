import React from "react";
import genresList from "../../../../json/genresList.json";

import ModalHeading from "../heading/ModalHeading";
import { useFilterContext } from "../../../../hooks/shared/FilterProvider";

const GenreListFilter = () => {
  const { filterGenre, setFilterGenre } = useFilterContext();
  const handleGenreChoice = (genreID, genreName) => {
    setFilterGenre((prev) => {
      const isChecked = prev.some((x) => x.genreID === genreID);
      if (isChecked) return prev.filter((x) => x.genreID !== genreID);

      return [...prev, { genreID: genreID, genreName: genreName }];
    });
  };

  console.log(filterGenre);

  return (
    <div className="flex flex-col gap-4">
      <ModalHeading title={"Genre"} />
      <ul className="flex flex-wrap gap-x-6 gap-y-4">
        {genresList.genres.map((genre, index) => {
          return (
            <li
              key={index}
              className={`${filterGenre.find((selectedGenre) => selectedGenre.genreName === genre.genreName) ? "bg-[var(--brand-color-500)] transition-colors" : ""} shrink-0 rounded-full border border-gray-300 px-4 py-1 text-sm`}
              onClick={() => handleGenreChoice(genre.id, genre.genreName)}
            >
              {genre.genreName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenreListFilter;
