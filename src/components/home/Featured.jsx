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

const Feautred = ({
  title,
  subtext,
  link,
  endpoint,
  isNumbering,
  isRated,
  isDetailed,
}) => {
  const { response: movieData, isLoading } = useMovieData(link);
  const { isModalOpen, setModal, modalData, setModalData } = useModalControls();

  return (
    <section className="col-span-2 flex flex-col gap-6 bg-[var(--bg-neutral)] px-4 py-5">
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
              // <div
              //   key={index}
              //   // className="flex h-fit w-[40%] shrink-0 animate-fadeIn cursor-pointer flex-col gap-2 md:w-[25%]"
              // >
              <MovieCard
                key={index}
                data={movie}
                numbering={index}
                isNumbering={isNumbering}
                isRated={isRated}
                isDetailed={isDetailed}
                setModal={setModal}
                setModalData={setModalData}
              />
              // </div>
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
