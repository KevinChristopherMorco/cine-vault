import React, { useEffect } from "react";
import IconChevronLeft from "@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

import useModalControls from "../../hooks/shared/useModalControls";

import MovieModal from "../shared/modals/MovieModal";
import Spinner from "../shared/loaders/Spinner";
import MainHeading from "../shared/headings/MainHeading";
import MovieCard from "../shared/movie/MovieCard";
import useMovieApi from "../../hooks/axios/useMovieApi";
import OverlayContainer from "../shared/containers/OverlayContainer";
import useCardSlider from "../../hooks/shared/useCardSlider";

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

  const {
    arrows: { hideRightArrow, hideLeftArrow },
    sliderRef,
    handleScroll,
  } = useCardSlider();

  return (
    <OverlayContainer>
      <MainHeading
        title={title}
        endpoint={endpoint}
        subtext={subtext}
        isLink={true}
        hasSubtext={true}
      />
      <div className="scroll relative">
        {!hideLeftArrow && (
          <div
            id="scrollLeft"
            onClick={handleScroll}
            className="absolute -left-4 top-[50%] z-[99] flex h-[50%] -translate-y-[50%] items-center rounded-xl bg-[var(--bg-neutral-light)]"
          >
            <IconChevronLeft />
          </div>
        )}

        {!hideRightArrow && (
          <div
            id="scrollRight"
            onClick={handleScroll}
            className="absolute -right-4 top-[50%] z-[99] flex h-[50%] -translate-y-[50%] items-center rounded-xl bg-[var(--bg-neutral-light)]"
          >
            <IconChevronRight />
          </div>
        )}

        <div
          ref={sliderRef}
          className="scrollable-content relative -mx-4 flex gap-x-6 overflow-x-scroll px-4 py-2 lg:-mx-8"
        >
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
      </div>

      {isModalOpen && (
        <MovieModal
          movieData={modalData}
          setModal={setModal}
          isLoading={isLoading}
          isPreview={true}
        />
      )}
    </OverlayContainer>
  );
};

export default Feautred;
