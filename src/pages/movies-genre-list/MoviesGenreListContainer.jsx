import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFilterContext } from "../../hooks/shared/FilterProvider";
import useMovieApi from "../../hooks/axios/useMovieApi";
import useListView from "../../hooks/shared/useListView";
import genresList from "../../json/genresList.json";

import MovieGenreHeader from "../../components/movies-genre-list/MovieGenreHeader";
import CompactView from "../../components/shared/card-view/CompactView";
import GridView from "../../components/shared/card-view/GridView";
import CardViewToggle from "../../components/shared/card-view/CardViewToggle";
import FilterCard from "../../components/shared/card-view/filters/FilterCard";
import useModalControls from "../../hooks/shared/useModalControls";
import FilterModal from "../../components/shared/modals/FilterModal";

const MoviesGenreListContainer = () => {
  const { genreID } = useParams();
  const { genres } = genresList;
  const findGenre = genres.find((genre) => genre.id === parseInt(genreID));
  const { genreName, genreOverview } = findGenre;

  const { movieData, isLoading, handleDiscoverEndpoint } = useMovieApi();
  const { order, filter, filterGenre } = useFilterContext();

  const { listType, setListType } = useListView();
  const { isModalOpen, setModal } = useModalControls();

  useEffect(() => {
    handleDiscoverEndpoint(genreID);
  }, [order, filter, filterGenre]);

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
        <FilterCard setModal={setModal} />
        <CardViewToggle listType={listType} setListType={setListType} />
      </div>
      {renderView()}

      {isModalOpen && <FilterModal setModal={setModal} />}
    </section>
  );
};

export default MoviesGenreListContainer;
