import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieApi from "../../hooks/axios/useMovieApi";
import genresList from "../../json/genresList.json";

import Featured from "../../components/home-page/Featured";
import OverviewSection from "../../components/genre-page/OverviewSection";
import GenreImage from "../../components/genre-page/GenreImage";
import GenreDescription from "../../components/genre-page/GenreDescription";

const GenreContainer = () => {
  const { genreID } = useParams();
  const { genres } = genresList;
  const findGenre = genres.find((genre) => genre.id === parseInt(genreID));
  const { genreName, genreDescription, genreImage, genreOverview } = findGenre;

  const trendingLink = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1`;
  const nowShowingLink = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1`;

  const { movieData, isLoading, handleDiscoverEndpoint } = useMovieApi();

  useEffect(() => {
    handleDiscoverEndpoint(genreID);
  }, [genreID]);

  if (isLoading) return;

  return (
    <div className="flex animate-fadeIn flex-col gap-10 md:grid md:grid-cols-2 md:gap-x-1 md:gap-y-14 md:px-0 xl:grid-rows-[65vh]">
      <GenreImage genreImage={genreImage} />
      <GenreDescription
        genreName={genreName}
        genreDescription={genreDescription}
      />
      <OverviewSection
        genreID={genreID}
        genreName={genreName}
        genreOverview={genreOverview}
        movieData={movieData}
      />
      <Featured
        title={"Trending this week"}
        subtext={"You don't want to miss this out."}
        link={trendingLink}
        endpoint={"/featured-movies-page/trending-movies"}
        cardType={"carousel"}
        isNumbering={true}
        isRated={true}
      />

      <Featured
        title={"In theaters"}
        subtext={"Showtimes near you"}
        link={nowShowingLink}
        endpoint={"/featured-movies-page/in-theaters-movies"}
        cardType={"carousel"}
        isNumbering={false}
        isRated={false}
      />
    </div>
  );
};

export default GenreContainer;
