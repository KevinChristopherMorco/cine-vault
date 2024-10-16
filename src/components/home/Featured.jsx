import React from "react";
import { Link } from "react-router-dom";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

import useMovieData from "../../hooks/axios/useMovieData";
import useModalControls from "../../hooks/shared/useModalControls";

import MovieModal from "../shared/modals/MovieModal";
import RatingProgress from "../shared/RatingProgress";
import Spinner from "../shared/loaders/Spinner";
import MainHeading from "../shared/headings/MainHeading";
import MovieCard from "../shared/movie/MovieCard";

const Feautred = ({ title, subtext, link, endpoint, isNumbering, isRated }) => {
  const { response: movieData, isLoading } = useMovieData(link);
  const { isModalOpen, setModal, modalData, setModalData } = useModalControls();

  return (
    <section className="col-span-2 flex flex-col gap-6 bg-[var(--bg-neutral)] px-4 py-5">
      {/* <div className="flex flex-col gap-1 border-l-4 border-[var(--brand-color-500)] px-3">
        <Link to={`/movies-list/${list}`} className="flex items-center gap-1">
          <p className="text-2xl font-bold">{title}</p>
          <IconChevronRight className="h-5 w-5" />
        </Link>
        <p className="text-sm text-gray-400">{subtext}</p>
      </div> */}
      <MainHeading
        title={title}
        endpoint={endpoint}
        subtext={subtext}
        isLink={true}
        hasSubtext={true}
      />
      <div className="scrollable-content -mx-4 flex gap-x-6 overflow-x-scroll px-4 py-2">
        {!isLoading ? (
          movieData.results.map((movie, index) => {
            return (
              <div
                key={index}
                className="flex h-fit w-[40%] shrink-0 animate-fadeIn cursor-pointer flex-col gap-2 md:w-[25%]"
                onClick={() => {
                  setModal(true);
                  setModalData(movie);
                }}
              >
                <MovieCard
                  data={movie}
                  numbering={index}
                  isNumbering={isNumbering}
                  isRated={isRated}
                  isDetailed={false}
                />
                {/* <div className="flex flex-col gap-2">
                  <div className="relative">
                    <img
                      src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt=""
                      className="h-full min-h-[13rem] w-full rounded-md"
                    />
                    {numbering && (
                      <p className="text-stroke absolute -left-4 bottom-0 text-6xl font-bold text-black">
                        {index + 1}
                      </p>
                    )}

                    <div className="absolute bottom-0 right-1">
                      <RatingProgress />
                    </div>
                  </div>
                  <p className="line-clamp-1 text-center text-[.8rem] font-medium">
                    {movie.title}
                  </p>
                </div> */}
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
      {isModalOpen && (
        <MovieModal
          movieData={modalData}
          setModal={setModal}
          isLoading={isLoading}
        />
      )}
    </section>
  );
};

export default Feautred;
