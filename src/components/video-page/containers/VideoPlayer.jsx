import React from "react";
import { useNavigate } from "react-router-dom";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";

import getMovieCertification from "../../../helpers/movie/getMovieCertification";
import useScreenResponsiveness from "../../../hooks/shared/useScreenResponsiveness";

import Spinner from "../../shared/loaders/Spinner";
import VideoTitle from "../VideoTitle";
import VideoGenre from "../VideoGenre";

const VideoPlayer = ({ video, movieData, isLoading }) => {
  const navigate = useNavigate();
  const { title, release_date, overview, poster_path } = movieData;

  const { PH: phCertification, US: usCertification } = getMovieCertification(
    movieData,
    isLoading,
  );

  const {
    screenSize: { lg, xl, xxl },
  } = useScreenResponsiveness();

  return (
    <div className="flex flex-col lg:basis-[90%]">
      {!isLoading ? (
        <div className="h-full lg:basis-[40%] xl:basis-[60%]">
          <div className="w-full bg-black px-4 py-2">
            <div
              onClick={() => navigate(-1)}
              className="flex cursor-pointer items-center gap-2 hover:text-gray-200"
            >
              Close
              <IconX className="h-4 w-4" />
            </div>
          </div>
          <iframe
            className="h-[20rem] w-full bg-black md:h-[25rem] lg:h-[90%] xl:h-[30rem]"
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="flex h-[20rem] w-full items-center justify-center bg-black">
          <Spinner />
        </div>
      )}

      <div className="flex h-full w-full flex-col gap-1 rounded-md bg-[var(--bg-neutral)] py-4 md:gap-6 lg:h-fit lg:py-10">
        {lg || xl || xxl ? (
          <div className="flex gap-4 px-4">
            <img
              src={`http://image.tmdb.org/t/p/w500${poster_path}`}
              className="w-[25%] rounded-md lg:w-[18%] xl:w-[15%]"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <VideoTitle title={title} release_date={release_date} />
              <VideoGenre
                usCertification={usCertification}
                phCertification={phCertification}
                movieData={movieData}
                isLoading={isLoading}
              />
            </div>
          </div>
        ) : (
          <>
            <VideoTitle title={title} release_date={release_date} />
            <VideoGenre
              usCertification={usCertification}
              phCertification={phCertification}
              movieData={movieData}
              isLoading={isLoading}
            />
          </>
        )}

        <div className="px-4">
          <p className="text-[.85rem] text-[.9rem] lg:text-base">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
