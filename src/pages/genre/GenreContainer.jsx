import React from "react";
import { useParams } from "react-router-dom";
import IconList from "@tabler/icons-react/dist/esm/icons/IconList.mjs";

import useMovieData from "../../hooks/axios/useMovieData";
import genresList from "../../json/genresList.json";

import Featured from "../../components/home/Featured";
import RecommendationCard from "../../components/movies-summary/movie-recommendation/RecommendationCard";

const GenreContainer = () => {
  const { genreID } = useParams();
  const { genres } = genresList;
  const findGenre = genres.find((genre) => genre.id === parseInt(genreID));
  const { name, description, image, overview } = findGenre;

  const trendingLink = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1`;

  const nowShowingLink = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1`;

  const { response, isLoading } = useMovieData(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreID}`,
  );

  if (isLoading) return;

  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-[35vh] md:gap-x-1 md:gap-y-10 md:px-4">
      <div className="md:relative">
        <div className="md:absolute md:-right-2 md:h-full md:w-[40%] md:bg-gradient-to-l md:from-[var(--brand-color-900)]"></div>
        <div className="md:absolute md:-right-2 md:h-full md:w-[20%] md:bg-gradient-to-l md:from-[var(--brand-color-900)]"></div>
        <div className="md:absolute md:-right-2 md:h-full md:w-[15%] md:bg-gradient-to-l md:from-[var(--brand-color-900)]"></div>
        <div className="md:absolute md:-right-2 md:h-full md:w-[15%] md:bg-gradient-to-l md:from-[var(--brand-color-900)]"></div>
        <div className="md:absolute md:-right-2 md:h-full md:w-[10%] md:bg-gradient-to-l md:from-[var(--brand-color-900)]"></div>

        <img src={image} alt="" className="h-full" />
      </div>
      <div className="flex flex-col gap-4 px-4">
        <p className="text-2xl font-bold text-[var(--brand-color-300)]">
          {name}
        </p>
        <p>{description}</p>
      </div>

      <div className="flex flex-col gap-6 bg-[var(--bg-neutral)] p-4 md:col-span-2 md:-mx-4 md:grid md:grid-cols-[40%_60%] md:gap-x-2 md:gap-y-8">
        <div className="border-l-4 border-[var(--brand-color-500)] px-4 text-2xl font-bold md:col-span-2">
          <p>List of {name} Movies</p>
        </div>
        <div className="flex flex-col gap-10 md:row-start-2">
          <p>{overview}</p>
          <p className="w-fit cursor-pointer text-[var(--brand-color-400)]">
            See the list
          </p>
        </div>

        <div className="relative flex w-full md:col-start-2 md:row-start-2">
          {response.results.slice(4, 7).map((movie, index) => (
            <img
              key={index}
              src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
              className="h-full w-[33%]"
            />
          ))}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-70 p-1 text-sm font-medium">
            <div className="group flex w-fit cursor-pointer items-center gap-2 transition-colors">
              <IconList className="h-4 w-4 group-hover:text-[var(--brand-color-400)]" />
              <p className="group-hover:text-[var(--brand-color-400)]">List</p>
            </div>
          </div>
        </div>
      </div>

      <Featured
        title={"Trending this week"}
        subtext={"You don't want to miss this out."}
        link={trendingLink}
        list={"trending-movies"}
        numbering={true}
      />

      <Featured
        title={"In theaters"}
        subtext={"Showtimes near you"}
        link={nowShowingLink}
        list={"in-theaters-movies"}
        numbering={false}
      />
    </div>
  );
};

export default GenreContainer;
