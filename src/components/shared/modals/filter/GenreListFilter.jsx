import React from "react";
import genresList from "../../../../json/genresList.json";

import ModalHeading from "../heading/ModalHeading";

const GenreListFilter = ({ filterGenre, setFilterGenre }) => {
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
        {genresList.genres.map((x) => {
          return (
            <li
              className={`${filterGenre.find((selectedGenre) => selectedGenre.genreName === x.genreName) ? "bg-red-500" : ""} shrink-0 rounded-full border border-gray-300 px-4 py-1 text-sm`}
              onClick={() => handleGenreChoice(x.id, x.genreName)}
            >
              {x.genreName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenreListFilter;
