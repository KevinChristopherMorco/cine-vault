import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFilterContext } from "../../hooks/shared/FilterProvider";
import useMovieApi from "../../hooks/axios/useMovieApi";
import useListView from "../../hooks/shared/useListView";
import useModalControls from "../../hooks/shared/useModalControls";
import genresList from "../../json/genresList.json";

import MovieGenreHeader from "../../components/movies-genre-list/MovieGenreHeader";
import CompactView from "../../components/shared/card-view/CompactView";
import GridView from "../../components/shared/card-view/GridView";
import CardViewToggle from "../../components/shared/card-view/CardViewToggle";
import SortCard from "../../components/shared/card-view/filters/SortCard";
import FilterModal from "../../components/shared/modals/FilterModal";
import Empty from "../../components/alerts/Empty";
import ReactPaginate from "react-paginate";
import PaginationList from "../../components/shared/pagination/PaginationList";

const MoviesGenreListContainer = () => {
  const { genreID } = useParams();
  const { genres } = genresList;
  const findGenre = genres.find((genre) => genre.id === parseInt(genreID));
  const { genreName, genreOverview } = findGenre;

  const {
    movieData,
    offset,
    isLoading,
    currentPage,
    handleDiscoverEndpoint,
    handleNextPage,
    handlePreviousPage,
    handleChoosePage,
    handleOffset,
  } = useMovieApi();
  const { order, sort, filterGenre, filterDate, filterRating, filterVotes } =
    useFilterContext();

  const { listType, setListType } = useListView();
  const { isModalOpen, setModal } = useModalControls();

  useEffect(() => {
    handleDiscoverEndpoint(genreID);
  }, [
    order,
    sort,
    filterDate,
    filterGenre,
    filterRating,
    filterVotes,
    currentPage,
  ]);

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
        <SortCard setModal={setModal} />
        <CardViewToggle listType={listType} setListType={setListType} />
      </div>
      <div>
        {movieData.results.length > 0 ? (
          renderView()
        ) : (
          <div className="col-span-2 flex items-center justify-center">
            <Empty
              title={"No Results Found"}
              subtext={"Please adjust your filters and try again!"}
            />
          </div>
        )}
        <PaginationList
          movieData={movieData}
          offset={offset}
          currentPage={currentPage}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handleChoosePage={handleChoosePage}
          handleOffset={handleOffset}
        />
      </div>
      {isModalOpen && <FilterModal setModal={setModal} />}
    </section>
  );
};

export default MoviesGenreListContainer;
