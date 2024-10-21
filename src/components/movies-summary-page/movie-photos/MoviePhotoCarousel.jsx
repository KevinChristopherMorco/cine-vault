import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";
import IconGridDots from "@tabler/icons-react/dist/esm/icons/IconGridDots.mjs";
import IconChevronLeft from "@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

import useMovieApi from "../../../hooks/axios/useMovieApi";
import getMovieImage from "../../../helpers/movie/getMovieImage";
import useImageCarousel from "../../../hooks/shared/useImageCarousel";

const MoviePhotoCarousel = ({ movieData, isLoading }) => {
  const navigate = useNavigate();
  const { imageCount, handleImageCount } = useImageCarousel();

  if (isLoading) return;

  const {
    images: { backdrops, posters, logos },
  } = movieData;

  const images = getMovieImage(backdrops, posters, logos);

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <div
            className="flex w-fit items-center gap-1"
            onClick={() => navigate(-1)}
          >
            <IconX className="h-4 w-4" />
            <p className="text-sm font-medium">Close</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm">
              {imageCount + 1} of {images.length}
            </p>
            <IconGridDots className="h-4 w-4" />
          </div>
        </div>
        <div className="relative">
          <div>
            {imageCount > 0 && (
              <IconChevronLeft
                id={"arrow-desc"}
                className="absolute left-2 top-[50%] -translate-y-[50%] cursor-pointer"
                onClick={handleImageCount}
              />
            )}

            {imageCount + 1 < images.length && (
              <IconChevronRight
                id={"arrow-asc"}
                className="absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer"
                onClick={handleImageCount}
              />
            )}
          </div>
          <img
            src={`http://image.tmdb.org/t/p/w500/${images[imageCount].file_path}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePhotoCarousel;
