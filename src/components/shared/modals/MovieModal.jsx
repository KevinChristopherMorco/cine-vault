import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import IconPlayerPlayFilled from "@tabler/icons-react/dist/esm/icons/IconPlayerPlayFilled.mjs";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";
import IconCalendarFilled from "@tabler/icons-react/dist/esm/icons/IconCalendarFilled.mjs";
import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconMoodHappyFilled from "@tabler/icons-react/dist/esm/icons/IconMoodHappyFilled.mjs";
import IconMoodEmptyFilled from "@tabler/icons-react/dist/esm/icons/IconMoodEmptyFilled.mjs";
import IconMoodSadFilled from "@tabler/icons-react/dist/esm/icons/IconMoodSadFilled.mjs";

import getMovieCertification from "../../../helpers/movie/getMovieCertification";

import monthYear from "../../../helpers/format/formatMonthYear";
import twoDecimal from "../../../helpers/format/formatTwoDecimal";

import LoadingButton from "../loaders/LoadingButton";
import Spinner from "../loaders/Spinner";
import useMovieApi from "../../../hooks/axios/useMovieApi";
import formatPercentage from "../../../helpers/format/formatPercentage";

const MovieModal = ({ movieData, setModal }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { backdrop_path, id, title, overview, release_date, vote_average } =
    movieData;

  const { movieData: data, isLoading, handleSpecificEndpoint } = useMovieApi();

  const { PH: phCertification, US: usCertification } = getMovieCertification(
    data,
    isLoading,
  );

  const handleModalRedirect = () => {
    setModal(false);
    setTimeout(() => {
      navigate(`/video/${id}`);
    }, 0);
  };

  useEffect(() => {
    handleSpecificEndpoint(id);
  }, [id]);

  const percentageProperty = formatPercentage(vote_average);
  const { overallVerdict } = percentageProperty;

  return (
    <div className="fixed left-0 top-0 z-[999] flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-50">
      {!isLoading ? (
        <div className="flex animate-modalScale flex-col gap-2 rounded-md bg-black md:w-[70%] xl:w-[45%]">
          <>
            <div className="relative h-[45%] animate-fadeIn rounded-md before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-violet-900 before:bg-opacity-20 md:h-[55%] xl:h-[60%]">
              <img
                src={`http://image.tmdb.org/t/p/w500${backdrop_path}`}
                alt={title}
                className="h-full w-full rounded-md"
              />
              <IconX
                className="absolute right-2 top-4 cursor-pointer text-white"
                onClick={() => setModal(false)}
              />
              <p className="absolute bottom-5 px-4 text-xl font-bold">
                {title}
              </p>
            </div>

            <div className="flex h-[55%] flex-col justify-between px-4 py-4 md:h-[45%] xl:h-[40%]">
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
                  {/* {(usCertification || phCertification) && (
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
                  )} */}
                  
                  {overallVerdict && (
                    <div className="flex items-center gap-1 rounded-full bg-gray-900 px-2 py-1">
                      {overallVerdict === "Must-Watch" && (
                        <IconMoodHappyFilled className="h-4 w-4 text-green-500" />
                      )}
                      {overallVerdict === "Average" && (
                        <IconMoodEmptyFilled className="h-4 w-4 text-yellow-500" />
                      )}
                      {overallVerdict === "Could be better" && (
                        <IconMoodSadFilled className="h-4 w-4 text-red-500" />
                      )}

                      <p className="text-[.75rem]">{overallVerdict}</p>
                    </div>
                  )}
                </div>

                <p className="line-clamp-2">{overview}</p>
              </div>
              {pathname === "/" && (
                <div className="flex justify-between">
                  {!isLoading ? (
                    <a
                      onClick={handleModalRedirect}
                      className="flex w-[55%] cursor-pointer items-center justify-center gap-2 rounded-md bg-[var(--brand-color-500)] p-2 font-medium"
                    >
                      <IconPlayerPlayFilled className="h-4 w-4" />
                      Trailer
                    </a>
                  ) : (
                    <LoadingButton text={"Loading Trailer..."} />
                  )}

                  <Link
                    to={`/movies-summary/${id}`}
                    className="w-[40%] cursor-pointer rounded-md border border-[var(--brand-color-500)] p-2 text-center font-medium text-[var(--brand-color-300)]"
                  >
                    More Details
                  </Link>
                </div>
              )}
            </div>
          </>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MovieModal;
