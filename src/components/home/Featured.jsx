import React from "react";
import { Link } from "react-router-dom";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

import useMovieData from "../../hooks/axios/useMovieData";
import useModalControls from "../../hooks/shared/useModalControls";

import MovieModal from "../shared/modals/MovieModal";
import RatingProgress from "../shared/RatingProgress";
import Spinner from "../shared/loaders/Spinner";

const Feautred = ({ title, subtext, link }) => {
  const { response: movieData, isLoading } = useMovieData(link);
  const { isModalOpen, setModal, modalData, setModalData } = useModalControls();

  return (
    <section className="flex flex-col gap-6 py-10">
      <div className="mx-4 flex flex-col gap-1 border-l-4 border-[var(--brand-color-500)] px-3">
        <Link className="flex items-center gap-1">
          <p className="text-2xl font-bold">{title}</p>
          <IconChevronRight className="h-5 w-5" />
        </Link>
        <p className="text-sm text-gray-400">{subtext}</p>
      </div>
      <div className="flex gap-x-6 overflow-x-scroll px-4 py-2">
        {!isLoading ? (
          movieData.results.map((movie, index) => {
            return (
              <div
                key={index}
                className="flex h-fit w-[40%] shrink-0 animate-fadeIn flex-col gap-2"
                onClick={() => {
                  setModal(true);
                  setModalData(movie);
                }}
              >
                <div className="relative">
                  <img
                    src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    className="h-full min-h-[13rem] w-full rounded-md"
                  />
                  <p className="text-stroke absolute -left-4 bottom-0 text-6xl font-bold text-black">
                    {index + 1}
                  </p>
                  <div className="absolute bottom-0 right-1">
                    <RatingProgress />
                  </div>
                </div>
                <p className="line-clamp-1 text-center text-[.8rem] font-medium">
                  {movie.title}
                </p>
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
