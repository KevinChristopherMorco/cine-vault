import React from "react";
import { Link } from "react-router-dom";

import genreList from "../../json/genresList.json";
import MainHeading from "../../components/shared/headings/MainHeading";

const GenreListContainer = () => {
  return (
    <section className="flex animate-fadeIn flex-col gap-8 p-4">
      <MainHeading
        title={"Movie Genres"}
        subtext={"Discover the genres that you love!"}
        hasSubtext={true}
      />
      <ul className="grid grid-cols-2 gap-x-5 gap-y-10">
        {genreList.genres.map((genre) => {
          const lol = genre.genreImage;
          return (
            <li className="group h-[8rem] cursor-pointer md:h-[14rem] xl:h-[20rem]">
              <Link to={`/genre/${genre.id}`}>
                <div
                  className="relative h-full w-full rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${lol})` }}
                >
                  <p className="absolute -bottom-1 w-full bg-[var(--bg-neutral)] px-2 py-1 font-medium transition-colors group-hover:text-[var(--brand-color-400)] xl:text-xl">
                    {genre.genreName}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default GenreListContainer;
