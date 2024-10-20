import React, { useEffect } from "react";

import useModalControls from "../../hooks/shared/useModalControls";

import MovieModal from "../shared/modals/MovieModal";
import Spinner from "../shared/loaders/Spinner";
import MainHeading from "../shared/headings/MainHeading";
import MovieCard from "../shared/movie/MovieCard";
import useMovieApi from "../../hooks/axios/useMovieApi";
import OverlayContainer from "../shared/containers/OverlayContainer";

const Feautred = ({
  title,
  subtext,
  link,
  endpoint,
  cardType,
  isNumbering,
  isRated,
}) => {
  const { movieData, isLoading, handleCommonEndpoint } = useMovieApi();
  const { isModalOpen, setModal, modalData, setModalData } = useModalControls();

  useEffect(() => {
    handleCommonEndpoint(link);
  }, []);

  return (
    // <section className="flex flex-col gap-6 bg-[var(--bg-neutral)] px-4 py-5">
    <OverlayContainer>
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
                cardType={cardType}
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
    </OverlayContainer>
    // </section>
  );
};

export default Feautred;
