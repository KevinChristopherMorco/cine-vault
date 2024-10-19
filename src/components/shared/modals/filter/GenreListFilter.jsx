import React, { useEffect } from "react";
import genresList from "../../../../json/genresList.json";

import ModalHeading from "../heading/ModalHeading";
import { useFilterContext } from "../../../../hooks/shared/FilterProvider";
import { useParams } from "react-router-dom";

const GenreListFilter = () => {
  const { genreID } = useParams();
  const { filterGenre, setFilterGenre } = useFilterContext();
  const handleGenreChoice = (genreID, genreName) => {
    setFilterGenre((prev) => {
      const isChecked = prev.some((x) => x.genreID === genreID);
      if (isChecked) return prev.filter((x) => x.genreID !== genreID);

      return [...prev, { genreID: genreID, genreName: genreName }];
    });
  };

  console.log(filterGenre);

  // useEffect(() => {
  //   const { id, genreName } = genresList.genres.find(
  //     (genre) => genre.id === parseInt(genreID),
  //   );
  //   setFilterGenre((prev) => [
  //     ...prev,
  //     { genreID: genreID, genreName: genreName },
  //   ]);
  // }, []);

  return (
    <div className="flex flex-col gap-4">
      <ModalHeading title={"Genre"} />
      <ul className="flex flex-wrap gap-x-6 gap-y-4">
        {genresList.genres.map((genre, index) => {
          return (
            <li
              key={index}
              className={`${filterGenre.find((selectedGenre) => selectedGenre.genreName === genre.genreName) ? "bg-[var(--brand-color-500)] transition-colors" : ""} shrink-0 cursor-pointer rounded-full border border-gray-300 px-4 py-1 text-sm font-medium transition-colors xl:hover:bg-[var(--brand-color-500)]`}
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
