import React from "react";
import { useParams } from "react-router-dom";
import genresList from "../../json/genresList.json";

const GenreContainer = () => {
  const { genreID } = useParams();
  const { genres } = genresList;
  const findGenre = genres.find((genre) => genre.id === parseInt(genreID));
  const { name, description, image } = findGenre;
  console.log(findGenre);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div
          className="h-[13rem] w-full rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="flex flex-col gap-4 px-4">
        <p className="text-2xl font-bold text-[var(--brand-color-300)]">
          {name}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GenreContainer;
