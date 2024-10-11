import React from "react";
import { Link } from "react-router-dom";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";

import getMovieCertification from "../../helpers/movie/getMovieCertification";
import getMovieTrailer from "../../helpers/movie/getMovieTrailer";
import useScreenResponsiveness from "../../hooks/shared/useScreenResponsiveness";

import Spinner from "../shared/loaders/Spinner";
import VideoTitle from "./VideoTitle";
import VideoGenre from "./VideoGenre";

const VideoPlayer = ({ video, isAppendLoading, appendDetails }) => {
  const { title, release_date, overview, poster_path } = appendDetails;
  const { trailerKey } = getMovieTrailer(appendDetails, isAppendLoading);

  const { PH: phCertification, US: usCertification } = getMovieCertification(
    appendDetails,
    isAppendLoading,
  );

  const {
    screenSize: { lg, xl, xxl },
  } = useScreenResponsiveness();

  console.log(lg);

  return (
    <div className="flex flex-col lg:col-span-2 lg:flex-row lg:px-8">
      {!isAppendLoading ? (
        <div className="h-full lg:basis-[70%]">
          <div className="w-full bg-black px-4 py-2">
            <Link to={"/"} className="flex items-center gap-2">
              Close
              <IconX className="h-4 w-4" />
            </Link>
          </div>
          <iframe
            className="h-[20rem] w-full bg-black md:h-[25rem] lg:h-[90%] xl:h-[90%]"
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

      <div className="flex h-full flex-col gap-1 bg-[var(--bg-neutral)] py-4 md:gap-6 lg:basis-[30%]">
        {lg || xl || xxl ? (
          <div className="flex gap-4 px-4">
            <img
              src={`http://image.tmdb.org/t/p/w500${poster_path}`}
              className="w-[25%] rounded-md"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <VideoTitle title={title} release_date={release_date} />
              <VideoGenre
                usCertification={usCertification}
                phCertification={phCertification}
                appendDetails={appendDetails}
                isAppendLoading={isAppendLoading}
              />
            </div>
          </div>
        ) : (
          <>
            <VideoTitle title={title} release_date={release_date} />
            <VideoGenre
              usCertification={usCertification}
              phCertification={phCertification}
              appendDetails={appendDetails}
              isAppendLoading={isAppendLoading}
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
