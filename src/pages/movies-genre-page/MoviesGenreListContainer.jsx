import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFilterContext } from "../../hooks/shared/FilterProvider";
import useMovieApi from "../../hooks/axios/useMovieApi";
import useListView from "../../hooks/shared/useListView";
import useModalControls from "../../hooks/shared/useModalControls";
import genresList from "../../json/genresList.json";
import renderMovielistView from "../../helpers/renderMovielistView";

import MovieGenreHeader from "../../components/movies-genre-page/MovieGenreHeader";
import CardViewToggle from "../../components/shared/card-view/CardViewToggle";
import SortCard from "../../components/shared/card-view/filters/SortCard";
import FilterModal from "../../components/shared/modals/FilterModal";
import Empty from "../../components/alerts/Empty";
import PaginationList from "../../components/shared/pagination/PaginationList";
import NotFound from "../../components/https/NotFound";

const MoviesGenreListContainer = () => {
  const { genreID } = useParams();
  const { genres } = genresList;

  const {
    movieData,
    isLoading,
    currentPage,
    handleDiscoverEndpoint,
    handleNextPage,
    handlePreviousPage,
    handleChoosePage,
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

  if ((!movieData.results || movieData.results.length === 0) && !isLoading)
    return <NotFound />;

  const findGenre = genres.find((genre) => genre.id === parseInt(genreID));
  const { genreName, genreOverview } = findGenre;

  return (
    <section className="grid grid-cols-2 gap-y-6 p-4 lg:grid-cols-[3fr_1fr]">
      <MovieGenreHeader genreName={genreName} genreOverview={genreOverview} />
      <div className="col-span-2 grid gap-y-4">
        <SortCard setModal={setModal} />
        <CardViewToggle listType={listType} setListType={setListType} />
        {movieData.results.length > 1 && (
          <PaginationList
            movieData={movieData}
            currentPage={currentPage}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handleChoosePage={handleChoosePage}
          />
        )}
      </div>
      <div className="relative col-span-2">
        {movieData.results.length > 0 ? (
          renderMovielistView(movieData.results, isLoading, listType)
        ) : (
          <div className="col-span-2 flex items-center justify-center">
            <Empty
              title={"No Results Found"}
              subtext={"Please adjust your filters and try again!"}
            />
          </div>
        )}
        {movieData.results.length > 1 && (
          <PaginationList
            movieData={movieData}
            currentPage={currentPage}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handleChoosePage={handleChoosePage}
          />
        )}
      </div>
      {isModalOpen && <FilterModal setModal={setModal} />}
    </section>
  );
};

export default MoviesGenreListContainer;
