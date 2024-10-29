import React from "react";
import { Link } from "react-router-dom";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";
import IconMovie from "@tabler/icons-react/dist/esm/icons/IconMovie.mjs";
import IconDeviceTvOld from "@tabler/icons-react/dist/esm/icons/IconDeviceTvOld.mjs";
import IconMoodCrazyHappy from "@tabler/icons-react/dist/esm/icons/IconMoodCrazyHappy.mjs";

import useScreenResponsiveness from "../../hooks/shared/useScreenResponsiveness";

const Sidebar = ({ isToggle, handleToggle }) => {
  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();
  return (
    <>
      {(lg || xl || xxl) && (
        <div
          className={`fixed z-[999] flex h-screen w-full flex-col gap-10 bg-[var(--bg-neutral-light)] px-48 py-12 ${
            isToggle ? "animate-slideDown" : "animate-slideUp"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to={"/"} className="flex w-fit items-center font-bold">
              <p className="text-5xl text-[var(--brand-color-500)]">C</p>
              <p className="text-xl text-white">INEVAULT</p>
            </Link>
            <div>
              <IconX
                className="h-12 w-12 cursor-pointer rounded-full bg-[var(--brand-color-500)] p-2 transition-colors hover:bg-[var(--brand-color-600)]"
                onClick={handleToggle}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 items-start justify-center gap-x-20">
            <div className="flex flex-col gap-10">
              <p className="flex items-center gap-3 text-2xl font-medium">
                <IconMovie className="h-10 w-10 text-[var(--brand-color-500)]" />
                Movies
              </p>
              <List />
            </div>
            <div>
              <div className="flex flex-col gap-10">
                <p className="flex items-center gap-3 text-2xl font-medium">
                  <IconDeviceTvOld className="h-10 w-10 text-[var(--brand-color-500)]" />
                  Tv Series
                </p>
                <p>(Coming Soon)</p>
              </div>
            </div>
            <div className="flex gap-2 text-2xl font-medium">
              <p className="flex items-center gap-3 text-2xl font-medium">
                <IconMoodCrazyHappy className="h-10 w-10 text-[var(--brand-color-500)]" />
                All Movie Genres
              </p>
            </div>
          </div>
        </div>
      )}

      {(sm || md) && (
        <div className="fixed z-[999] h-screen w-full bg-black bg-opacity-50">
          <div
            className={`absolute right-0 flex h-full w-[70%] flex-col gap-10 bg-[var(--bg-neutral-light)] p-6 ${
              isToggle ? "animate-slideIn" : "animate-slideOut"
            }`}
          >
            <div className="flex items-center justify-between">
              <Link to={"/"} className="flex w-fit items-center font-bold">
                <p className="text-5xl text-[var(--brand-color-500)]">C</p>
                <p className="text-white">INEVAULT</p>
              </Link>
              <div>
                <IconX
                  className="h-8 w-8 cursor-pointer rounded-full bg-[var(--brand-color-500)] p-2"
                  onClick={handleToggle}
                />
              </div>
            </div>
            <List />
          </div>
        </div>
      )}
    </>
  );
};

const List = () => {
  return (
    <ul className="flex flex-col gap-6">
      <li className="cursor-pointer font-medium transition-colors hover:text-[var(--brand-color-400)]">
        <Link to={"/featured-movies-page/trending-movies"}>
          Weekly Trending Movies
        </Link>
      </li>
      <li className="cursor-pointer font-medium transition-colors hover:text-[var(--brand-color-400)]">
        <Link to={"/featured-movies-page/highest-rated-movies"}>
          Highest Rated Movies
        </Link>
      </li>
      <li className="cursor-pointer font-medium transition-colors hover:text-[var(--brand-color-400)]">
        <Link> Popular Movies</Link>
      </li>
      <li className="cursor-pointer font-medium transition-colors hover:text-[var(--brand-color-400)]">
        <Link to={"/featured-movies-page/in-theaters-movies"}>In theaters</Link>
      </li>
    </ul>
  );
};
export default Sidebar;
