import React, { useEffect, useState } from "react";
import IconPlayerPlayFilled from "@tabler/icons-react/dist/esm/icons/IconPlayerPlayFilled.mjs";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";
import IconCalendarFilled from "@tabler/icons-react/dist/esm/icons/IconCalendarFilled.mjs";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";

import monthYear from "../../../helpers/format/formatMonthYear";
import twoDecimal from "../../../helpers/format/formatTwoDecimal";
import useMovieAppend from "../../../hooks/axios/useMovieAppend";
import LoadingButton from "../loaders/LoadingButton";
import useMovieTrailer from "../../../hooks/shared/useMovieTrailer";
import useMovieCertification from "../../../hooks/shared/useMovieCertification";

const MovieModal = ({ movieData, setModal, setModalData }) => {
  const { backdrop_path, id, title, overview, release_date, vote_average } =
    movieData;

  const { appendDetails, isAppendLoading } = useMovieAppend(id);
  const { trailer: trailerKey } = useMovieTrailer(
    appendDetails,
    isAppendLoading,
  );

  const { certifications: { US: usCertification, PH: phCertification } = {} } =
    useMovieCertification(appendDetails, isAppendLoading);

  return (
    <div className="fixed top-0 z-[999] flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="animate-modalScale flex flex-col gap-2 rounded-md bg-black">
        <div className="relative h-[40%] rounded-md before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-violet-900 before:bg-opacity-20">
          <img
            src={`http://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={title}
            className="h-full w-full rounded-md"
          />
          <IconX
            className="absolute right-2 top-4 cursor-pointer text-white"
            onClick={() => setModal(false)}
          />
          <p className="absolute bottom-5 px-4 text-xl font-bold">{title}</p>
        </div>
        <div className="flex flex-col gap-6 p-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex items-center gap-1 rounded-full bg-gray-900 px-2 py-1">
                <IconCalendarFilled className="h-3 w-3" />
                <p className="text-[.75rem]">{monthYear(release_date)}</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-gray-900 px-2 py-1">
                <IconStarFilled className="h-3 w-3" />
                <p className="text-[.75rem]">{twoDecimal(vote_average)}</p>
              </div>
              {(usCertification || phCertification) && (
                <div className="flex items-center gap-1 rounded-full bg-gray-900 px-2 py-1">
                  <img
                    src={
                      usCertification
                        ? `https://em-content.zobj.net/source/facebook/200/flag-for-united-states_1f1fa-1f1f8.png`
                        : `https://em-content.zobj.net/source/facebook/65/flag-for-philippines_1f1f5-1f1ed.png`
                    }
                    className="h-3 w-3"
                  />
                  <p className="text-[.75rem]">
                    {usCertification || phCertification}
                  </p>
                </div>
              )}
            </div>

            <p className="line-clamp-4">{overview}</p>
          </div>
          <div className="flex justify-between">
            {!isAppendLoading && trailerKey ? (
              <a
                target="_black"
                href={`https://www.youtube.com/watch?v=${trailerKey}`}
                className="flex w-[55%] cursor-pointer items-center justify-center gap-2 rounded-md bg-[var(--brand-color-500)] p-2 font-medium"
              >
                <IconPlayerPlayFilled className="h-4 w-4" />
                Trailer
              </a>
            ) : (
              <LoadingButton text={"Loading Trailer..."} />
            )}

            <button className="w-[40%] cursor-pointer rounded-md border border-[var(--brand-color-500)] p-2 font-medium text-[var(--brand-color-300)]">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
