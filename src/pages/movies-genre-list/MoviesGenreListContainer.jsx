import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMovieApi from "../../hooks/axios/useMovieApi";
import useListView from "../../hooks/shared/useListView";
import genresList from "../../json/genresList.json";

import MovieGenreHeader from "../../components/movies-genre-list/MovieGenreHeader";
import CompactView from "../../components/shared/card-view/CompactView";
import GridView from "../../components/shared/card-view/GridView";
import CardViewToggle from "../../components/shared/card-view/CardViewToggle";
import FilterCard from "../../components/shared/card-view/filters/FilterCard";

const MoviesGenreListContainer = () => {
  const { genreID } = useParams();
  const { genres } = genresList;
  const findGenre = genres.find((genre) => genre.id === parseInt(genreID));
  const { genreName, genreOverview } = findGenre;

  const { movieData, isLoading, handleDiscoverEndpoint } = useMovieApi();
  const { listType, setListType } = useListView();

  useEffect(() => {
    handleDiscoverEndpoint(genreID);
  }, []);

  if (isLoading) return;

  const renderView = () => {
    switch (listType) {
      case "compactView":
        return <CompactView movieData={movieData} isLoading={isLoading} />;
      case "gridView":
        return <GridView movieData={movieData} isLoading={isLoading} />;
      default:
        return null;
    }
  };

  return (
    <section className="grid grid-cols-2 gap-y-6 p-4 lg:grid-cols-[3fr_1fr]">
      <MovieGenreHeader genreName={genreName} genreOverview={genreOverview} />
      <div className="col-span-2 grid grid-cols-2 items-center gap-y-4 lg:flex lg:gap-6">
        <FilterCard />
        <CardViewToggle listType={listType} setListType={setListType} />
      </div>
      {renderView()}
    </section>
  );
};

export default MoviesGenreListContainer;
