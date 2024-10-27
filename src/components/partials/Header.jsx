import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconSearch from "@tabler/icons-react/dist/esm/icons/IconSearch.mjs";
import IconMenu2 from "@tabler/icons-react/dist/esm/icons/IconMenu2.mjs";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";
import IconBrightness2 from "@tabler/icons-react/dist/esm/icons/IconBrightness2.mjs";
import IconMoonStars from "@tabler/icons-react/dist/esm/icons/IconMoonStars.mjs";

import useMovieApi from "../../hooks/axios/useMovieApi";
import useSearch from "../../hooks/search/useSearch";
import useScreenResponsiveness from "../../hooks/shared/useScreenResponsiveness";
import formatYear from "../../helpers/format/formatYear";

const Header = () => {
  const {
    search: { toggle, view },
    setSearch,
  } = useSearch();
  const [query, setQuery] = useState("");
  const { movieData, isLoading, handleSearchQueryEndpoint } = useMovieApi();

  useEffect(() => {
    const timeout = setTimeout(() => handleSearchQueryEndpoint(query), 150);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value === "") {
      setSearch((prev) => ({ ...prev, view: false }));
      setQuery(value);
    } else {
      setSearch((prev) => ({ ...prev, view: true }));
      setQuery(value);
    }
  };

  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();

  return (
    <>
      {(sm || md) && (
        <nav className="fixed z-[999] flex h-[4rem] w-full items-center justify-between border-b border-b-[var(--brand-color-600)] bg-[var(--bg-neutral)] p-4 lg:h-[4.5rem] dark:bg-[var(--brand-color-900)]">
          {toggle ? (
            <div className="w-full">
              <div className="flex w-full items-center justify-between">
                <input
                  type="text"
                  className="w-[90%] animate-fadeIn bg-transparent p-1 outline-none"
                  placeholder="Search for a movie"
                  onChange={handleInputChange}
                />
                <IconX className="animate-iconScale cursor-pointer" />
              </div>
              {view && (
                <div className="fixed left-0 h-screen w-full animate-fadeIn overflow-y-scroll bg-[var(--bg-neutral)] px-3 py-4 pb-[5rem]">
                  {!isLoading &&
                    movieData.map((search) => {
                      const {
                        data: {
                          id,
                          poster_path,
                          title,
                          release_date,
                          credits: { cast },
                        },
                      } = search;

                      return (
                        <Link
                          to={`/movies-summary/${id}`}
                          key={id}
                          className="flex gap-4 border-b border-[var(--brand-color-700)] py-2 font-medium"
                          onClick={() =>
                            setSearch(() => ({ toggle: false, view: false }))
                          }
                        >
                          <img
                            src={
                              poster_path
                                ? `http://image.tmdb.org/t/p/w500${poster_path}`
                                : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                            }
                            alt=""
                            className="min-h-[5rem] w-[15%] rounded-md"
                          />
                          <div>
                            <p>{title}</p>
                            <p className="text-[.8rem] text-gray-400">
                              {formatYear(release_date)}
                            </p>
                            <div className="flex gap-1">
                              {cast.slice(0, 2).map((cast, index) => (
                                <p
                                  key={index}
                                  className="text-[.8rem] text-gray-400"
                                >
                                  {cast.name}
                                  {index !== 1 && <span>,</span>}
                                </p>
                              ))}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              )}
            </div>
          ) : (
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <Link to={"/"} className="flex w-fit items-center font-bold">
                  <p className="text-5xl text-[var(--brand-color-500)]">C</p>
                  <p className="text-white">INEVAULT</p>
                </Link>
              </div>

              <div className="flex gap-4">
                <IconSearch
                  className="h-6 w-6 animate-iconScale cursor-pointer"
                  onClick={() =>
                    setSearch((prev) => ({ ...prev, toggle: true }))
                  }
                />
                <IconMenu2 className="h-6 w-6 animate-iconScale cursor-pointer" />
              </div>
            </div>
          )}
        </nav>
      )}

      {(lg || xl || xxl) && (
        <nav className="fixed z-[999] flex h-[4rem] w-full items-center justify-between border-b border-b-[var(--brand-color-600)] bg-[var(--bg-neutral)] p-4 lg:h-[4.5rem] dark:bg-[var(--brand-color-900)]">
          <div className="flex w-full items-center gap-6">
            <div className="flex items-center gap-3">
              <Link to={"/"} className="flex w-fit items-center font-bold">
                <p className="text-5xl text-[var(--brand-color-500)]">C</p>
                <p className="text-white">INEVAULT</p>
              </Link>
            </div>
            <div className="flex gap-1">
              <IconMenu2 className="h-6 w-6 animate-iconScale cursor-pointer" />
              <p className="font-medium">Menu</p>
            </div>
            <div className="relative w-[50%]">
              <input
                type="text"
                className="w-full animate-fadeIn rounded-md bg-[var(--neutral-hover)] bg-transparent p-2 outline-none"
                placeholder="Search for a movie"
                onChange={handleInputChange}
              />

              {view && (
                <div className="absolute h-[85vh] w-full animate-fadeIn overflow-y-scroll bg-[var(--bg-neutral)] px-3 py-4 pb-[5rem]">
                  {!isLoading &&
                    movieData.map((search) => {
                      const {
                        data: {
                          id,
                          poster_path,
                          title,
                          release_date,
                          credits: { cast },
                        },
                      } = search;

                      return (
                        <Link
                          to={`/movies-summary/${id}`}
                          key={id}
                          className="flex gap-4 border-b border-[var(--brand-color-700)] py-2 font-medium"
                          onClick={() =>
                            setSearch(() => ({ toggle: false, view: false }))
                          }
                        >
                          <img
                            src={
                              poster_path
                                ? `http://image.tmdb.org/t/p/w500${poster_path}`
                                : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                            }
                            alt=""
                            className="min-h-[5rem] w-[15%] rounded-md"
                          />
                          <div>
                            <p>{title}</p>
                            <p className="text-[.8rem] text-gray-400">
                              {formatYear(release_date)}
                            </p>
                            <div className="flex gap-1">
                              {cast.slice(0, 2).map((cast, index) => (
                                <p
                                  key={index}
                                  className="text-[.8rem] text-gray-400"
                                >
                                  {cast.name}
                                  {index !== 1 && <span>,</span>}
                                </p>
                              ))}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
