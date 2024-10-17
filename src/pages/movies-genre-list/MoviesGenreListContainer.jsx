import React from "react";
import { useParams } from "react-router-dom";

import IconList from "@tabler/icons-react/dist/esm/icons/IconList.mjs";
import IconGridDots from "@tabler/icons-react/dist/esm/icons/IconGridDots.mjs";
import IconMenu2 from "@tabler/icons-react/dist/esm/icons/IconMenu2.mjs";

import genresList from "../../json/genresList.json";

import MovieGenreHeader from "../../components/movies-genre-list/MovieGenreHeader";
import CompactView from "../../components/movies-list/grid/CompactView";
import GridView from "../../components/movies-list/grid/GridView";
import DetailedView from "../../components/movies-list/grid/DetailedView";
import useListView from "../../hooks/shared/useListView";
import CardViewToggle from "../../components/shared/card-view/CardViewToggle";

const MoviesGenreListContainer = () => {
  const { genreID } = useParams();
  const { genres } = genresList;
  const findGenre = genres.find((genre) => genre.id === parseInt(genreID));
  const { genreName, genreOverview } = findGenre;

  const renderView = () => {
    switch (viewType) {
      case "compactView":
        return (
          <CompactView allMovieList={allMovieList} isLoading={isLoading} />
        );
      case "gridView":
        return <GridView allMovieList={allMovieList} isLoading={isLoading} />;
      case "detailedView":
        return (
          <DetailedView allMovieList={allMovieList} isLoading={isLoading} />
        );
      default:
        return null;
    }
  };

  return (
    <section className="p-4">
      <MovieGenreHeader genreName={genreName} genreOverview={genreOverview} />
      <CardViewToggle />
    </section>
  );
};

export default MoviesGenreListContainer;
