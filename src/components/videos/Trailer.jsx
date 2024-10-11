import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";
import IconPlayerPlayFilled from "@tabler/icons-react/dist/esm/icons/IconPlayerPlayFilled.mjs";

import useMovieAppend from "../../hooks/axios/useMovieAppend";
import formatYear from "../../helpers/format/formatYear";

import Spinner from "../shared/loaders/Spinner";
import getMovieGenre from "../../helpers/movie/getMovieGenre";
import getMovieCertification from "../../helpers/movie/getMovieCertification";
import getMovieTrailer from "../../helpers/movie/getMovieTrailer";
import useChangeVideo from "../../hooks/shared/useChangeVideo";
import useModalControls from "../../hooks/shared/useModalControls";
import useScreenResponsiveness from "../../hooks/shared/useScreenResponsiveness";

const Trailer = () => {
  const { movieID } = useParams();
  const { appendDetails, isAppendLoading } = useMovieAppend(movieID);

  const { title, release_date, overview } = appendDetails;
  const { trailerKey } = getMovieTrailer(appendDetails, isAppendLoading);

  const { PH: phCertification, US: usCertification } = getMovieCertification(
    appendDetails,
    isAppendLoading,
  );

  const { video, setVideo, videoList } = useChangeVideo(
    appendDetails,
    isAppendLoading,
  );

  const {
    screenSize: { lg, xl },
  } = useScreenResponsiveness();

  console.log(lg);

  //   useModalControls();

  return (
    <section className="flex grow flex-col gap-8 pb-[1rem] pt-[5rem] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 lg:px-8 xl:grid-rows-[35rem_auto] xl:gap-20">
      <div className="flex flex-col lg:col-span-2 lg:flex-row">
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

        <div className="flex h-full flex-col gap-1 bg-[var(--bg-neutral)] py-4 md:gap-2 lg:basis-[30%]">
          <div className="flex items-center gap-2 px-4">
            <p className="text-lg font-medium md:text-xl">{title}</p>
            <p className="text-sm">({formatYear(release_date)})</p>
          </div>
          <div className="flex items-center gap-1 px-4">
            {(usCertification || phCertification) && (
              <div className="flex items-center gap-1">
                <img
                  src={
                    usCertification
                      ? `https://em-content.zobj.net/source/facebook/200/flag-for-united-states_1f1fa-1f1f8.png`
                      : `https://em-content.zobj.net/source/facebook/65/flag-for-philippines_1f1f5-1f1ed.png`
                  }
                  className="h-4 w-4"
                />
                <p className="text-[.75rem] md:text-sm">
                  {usCertification || phCertification}
                </p>
              </div>
            )}
            |
            {!isAppendLoading &&
              getMovieGenre(appendDetails).length > 1 &&
              getMovieGenre(appendDetails).map((genre, index) => {
                return (
                  <p key={index} className="text-[.75rem] md:text-sm">
                    {genre}
                    {index === getMovieGenre(appendDetails).length - 1
                      ? ""
                      : ","}{" "}
                  </p>
                );
              })}
          </div>
          <div className="px-4">
            <p className="text-[.85rem] text-[.9rem]">{overview}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 bg-[var(--bg-neutral)] px-4 py-4 lg:col-span-2 lg:h-full lg:justify-center lg:gap-6 lg:bg-transparent lg:px-0">
        <p className="border-l-4 border-[var(--brand-color-500)] px-2 text-lg font-bold lg:px-4 lg:text-xl">
          Related Videos
        </p>
        {!isAppendLoading && (
          <div className="scrollable-content flex gap-6 overflow-x-scroll">
            {videoList.map((video) => {
              return (
                <div
                  key={video.key}
                  className="flex w-[85%] shrink-0 flex-col gap-2 md:w-[55%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]"
                >
                  <div
                    onClick={() => setVideo(video.key)}
                    className="relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-20"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                      alt="YouTube Thumbnail"
                      className="h-[12rem] w-full rounded-lg"
                    />
                    <div className="absolute bottom-2 left-1 flex h-8 w-8 items-center justify-center rounded-full border-4">
                      <IconPlayerPlayFilled className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="text-sm font-medium">{video.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Trailer;
