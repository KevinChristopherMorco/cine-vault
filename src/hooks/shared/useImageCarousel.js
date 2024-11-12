import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useImageCount from "./useImageCount";
import getMovieImage from "../../helpers/movie/getMovieImage";

const useImageCarousel = (
  imageCount,
  movieData,
  isLoading,
  handleFindImage,
) => {
  const navigate = useNavigate();

  const { movieID, photoPath } = useParams();

  const getImages = () => {
    if (isLoading) return;

    const {
      images: { backdrops, posters, logos },
    } = movieData;

    return getMovieImage(backdrops, posters, logos);
  };

  useEffect(() => {
    const images = getImages();
    if (!images) return;

    navigate(`/view-photo/${movieID}${images[imageCount]?.file_path}`);
  }, [imageCount]);

  useEffect(() => {
    const images = getImages();
    if (!images) return;

    handleFindImage(images, photoPath);
  }, [isLoading]);

  return { getImages };
};

export default useImageCarousel;
