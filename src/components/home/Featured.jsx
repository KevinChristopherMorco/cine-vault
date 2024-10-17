import React, { useEffect } from "react";

import useMovieData from "../../hooks/axios/useMovieData";
import useModalControls from "../../hooks/shared/useModalControls";

import MovieModal from "../shared/modals/MovieModal";
import Spinner from "../shared/loaders/Spinner";
import MainHeading from "../shared/headings/MainHeading";
import MovieCard from "../shared/movie/MovieCard";
import useMovieApi from "../../hooks/axios/useMovieApi";

const Feautred = ({
  title,
  subtext,
  link,
  endpoint,
  isNumbering,
  isRated,
  isDetailed,
}) => {
  const { movieData, isLoading, handleCommonEndpoint } = useMovieApi();
  const { isModalOpen, setModal, modalData, setModalData } = useModalControls();

  useEffect(() => {
    handleCommonEndpoint(link);
  }, []);

  console.log(movieData);

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
