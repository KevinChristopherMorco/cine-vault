import React from "react";
import { Link } from "react-router-dom";

import IconVideo from "@tabler/icons-react/dist/esm/icons/IconVideo.mjs";
import IconLibraryPhoto from "@tabler/icons-react/dist/esm/icons/IconLibraryPhoto.mjs";
import IconPhotoOff from "@tabler/icons-react/dist/esm/icons/IconPhotoOff.mjs";
import IconVideoOff from "@tabler/icons-react/dist/esm/icons/IconVideoOff.mjs";

import getMovieTrailer from "../../../helpers/movie/getMovieTrailer";
import getMovieImage from "../../../helpers/movie/getMovieImage";

import Empty from "../../alerts/Empty";

const HeroTrailer = ({ movieData, isLoading }) => {
  const {
    id,
    images: { backdrops, logos, posters },
    videos: { results: movieVideos },
  } = movieData;

  const imageList = getMovieImage(backdrops, posters, logos);

  const { trailerKey } = getMovieTrailer(movieData, isLoading);
  return (
    <>
      {trailerKey ? (
        <iframe
          className="relative col-span-2 h-[20rem] w-full bg-black md:col-span-1 md:col-start-2 md:row-start-2 md:h-[25rem] md:h-full lg:h-full"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative col-span-2 flex h-[20rem] w-full items-center justify-center bg-black md:col-span-1 md:col-start-2 md:row-start-2 md:h-[25rem] md:h-full lg:h-full">
          <Empty
            title={"No official trailer is available."}
            subtext={"You can check the video gallery for more videos."}
          />
        </div>
      )}

      <div className="relative col-span-2 flex font-bold uppercase lg:col-start-3 lg:row-start-2 lg:flex-col lg:gap-2">
        {movieVideos.length > 0 ? (
          <Link
            to={`/video/${id}`}
            className="flex basis-[50%] cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--bg-neutral)] p-3 text-center text-[.75rem] transition-all hover:bg-[var(--neutral-hover)] lg:flex-col lg:rounded-md"
          >
            <IconVideo className="h-5 w-5" />
            <p>{movieVideos.length} videos</p>
          </Link>
        ) : (
          <div className="flex basis-[50%] cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--bg-neutral)] p-3 text-center text-[.75rem] transition-all hover:bg-[var(--neutral-hover)] lg:flex-col lg:rounded-md">
            <IconVideoOff className="h-5 w-5" />
            <p>no videos found</p>
          </div>
        )}

        {backdrops.length > 0 || logos.length > 0 || posters.length > 0 ? (
          <Link
            to={`/view-photo/${id}${imageList[0].file_path}`}
            className="flex basis-[50%] cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--bg-neutral)] p-3 text-center text-[.75rem] transition-all hover:bg-[var(--neutral-hover)] lg:flex-col lg:rounded-md"
          >
            <IconLibraryPhoto className="h-5 w-5" />
            {backdrops.length + logos.length + posters.length} photos
          </Link>
        ) : (
          <div className="flex basis-[50%] cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--bg-neutral)] p-3 text-center text-[.75rem] transition-all hover:bg-[var(--neutral-hover)] lg:flex-col lg:rounded-md">
            <IconPhotoOff className="h-5 w-5" />
            no photos found
          </div>
        )}
      </div>
    </>
  );
};

export default HeroTrailer;
