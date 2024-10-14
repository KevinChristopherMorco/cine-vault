import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconSearch from "@tabler/icons-react/dist/esm/icons/IconSearch.mjs";
import IconMenu2 from "@tabler/icons-react/dist/esm/icons/IconMenu2.mjs";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";

import useSearch from "../../hooks/search/useSearch";
import useMovieSearch from "../../hooks/axios/useMovieSearch";
import formatYear from "../../helpers/format/formatYear";

const Header = () => {
  const {
    search: { toggle, view },
    setSearch,
  } = useSearch();
  const [query, setQuery] = useState("");
  const { searchResults, searchLoading } = useMovieSearch(query);

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

  return (
    <nav className="fixed z-[999] flex h-[4.5rem] w-full items-center justify-between border-b border-b-[var(--brand-color-600)] bg-[var(--bg-neutral)] p-4">
      {toggle ? (
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <input
              type="text"
              className="w-[90%] animate-fadeIn bg-transparent p-1 outline-none"
              placeholder="Search for a movie"
              onChange={handleInputChange}
            />
            <IconX
              className="animate-iconScale"
              onClick={() => setSearch(() => ({ toggle: false, view: false }))}
            />
          </div>
          {view && (
            <div className="fixed left-0 top-[4.5rem] h-screen w-full animate-fadeIn overflow-y-scroll bg-[var(--bg-neutral)] px-3 py-4 pb-[5rem]">
              {!searchLoading &&
                searchResults.map((search) => {
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
                            <p className="text-[.8rem] text-gray-400">
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
        <>
          <Link to={"/"} className="flex w-fit items-center font-bold">
            <p className="text-5xl text-[var(--brand-color-500)]">C</p>
            <p className="text-white">INEVAULT</p>
          </Link>
          <div className="flex gap-4">
            <div>
              <IconSearch
                className="h-6 w-6 animate-iconScale cursor-pointer"
                onClick={() => setSearch((prev) => ({ ...prev, toggle: true }))}
              />
            </div>
            <div>
              <IconMenu2 className="h-6 w-6 animate-iconScale cursor-pointer" />
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
