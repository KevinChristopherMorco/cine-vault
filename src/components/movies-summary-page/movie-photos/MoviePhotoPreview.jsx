import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useScreenResponsiveness from "../../../hooks/shared/useScreenResponsiveness";
import MainHeading from "../../shared/headings/MainHeading";
import getMovieImage from "../../../helpers/movie/getMovieImage";
import useImageCount from "../../../hooks/shared/useImageCount";

const MoviePhotoPreview = ({ movieData, isLoading }) => {
  const navigate = useNavigate();

  const {
    screenSize: { lg, xl, xxl },
  } = useScreenResponsiveness();

  const { imageCount, handleFindImage, handleFirstImage } = useImageCount();

  if (isLoading) return;

  const {
    id,
    title,
    images: { backdrops, posters, logos },
  } = movieData;

  const photoSlice = () => {
    if (lg) return backdrops.slice(0, 6);
    if (xl || xxl) return backdrops.slice(0, 8);

    return backdrops.slice(0, 4);
  };

  const imageList = getMovieImage(backdrops, posters, logos);

  const handleLinkClick = (imagePath) => {
    handleFindImage(imageList, imagePath);
    setTimeout(() => {
      navigate(`/view-photo/${id}${imagePath}`);
    }, 0);
  };

  return (
    <div className="flex flex-col gap-8 lg:row-start-1">
      <MainHeading
        title={"Photos"}
        endpoint={`/view-photo/${id}${imageList[0].file_path}`}
        isLink={true}
      />
      <div className="grid grid-cols-2 gap-1 md:auto-rows-auto md:gap-2 lg:auto-rows-auto lg:grid-cols-3">
        {photoSlice().map((image) => {
          return (
            <div onClick={() => handleLinkClick(image.file_path)}>
              <img
                src={`http://image.tmdb.org/t/p/w500${image.file_path}`}
                alt={title}
                className="w-full cursor-pointer md:h-[10rem] lg:h-[12rem]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviePhotoPreview;
