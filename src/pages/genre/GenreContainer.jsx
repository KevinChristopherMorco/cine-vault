import React from "react";
import { useParams } from "react-router-dom";

import useMovieData from "../../hooks/axios/useMovieData";
import genresList from "../../json/genresList.json";

import Featured from "../../components/home/Featured";
import MainHeading from "../../components/shared/headings/MainHeading";
import GenreMoviesPreview from "../../components/genre/GenreMoviesPreview";
import OverviewSection from "../../components/genre/OverviewSection";
import GenreImage from "../../components/genre/GenreImage";
import GenreDescription from "../../components/genre/GenreDescription";

const GenreContainer = () => {
  const { genreID } = useParams();
  const { genres } = genresList;
  const findGenre = genres.find((genre) => genre.id === parseInt(genreID));
  const { genreName, genreDescription, genreImage, genreOverview } = findGenre;

  const trendingLink = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1`;

  const nowShowingLink = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1`;

  const { response: movieData, isLoading } = useMovieData(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreID}`,
  );

  if (isLoading) return;

  return (
    <div className="flex animate-fadeIn flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-[35vh] md:gap-x-1 md:gap-y-14 md:px-0 xl:grid-rows-[65vh]">
      <GenreImage genreImage={genreImage} />
      <GenreDescription
        genreName={genreName}
        genreDescription={genreDescription}
      />
      <OverviewSection
        genreName={genreName}
        genreOverview={genreOverview}
        movieData={movieData}
      />
      <Featured
        title={"Trending this week"}
        subtext={"You don't want to miss this out."}
        link={trendingLink}
        endpoint={"trending-movies"}
        isNumbering={true}
        isRated={true}
        isDetailed={true}
      />

      <Featured
        title={"In theaters"}
        subtext={"Showtimes near you"}
        link={nowShowingLink}
        endpoint={"in-theaters-movies"}
        isNumbering={false}
        isRated={false}
        isDetailed={true}
      />
    </div>
  );
};

export default GenreContainer;
