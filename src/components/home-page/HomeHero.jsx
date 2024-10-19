import React from "react";
import cover from "../../assets/images/cover-photo.jpg";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

const HomeHero = () => {
  return (
    <section className="relative flex h-[80vh] flex-col items-center justify-center bg-[url('assets/images/cover-photo.jpg')] bg-cover before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:bg-opacity-70 md:h-[50vh] xl:h-[75vh]">
      <div className="relative flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-bold md:text-5xl">
            Discover a world of movies at your fingertips
          </p>
          <p className="text-sm md:text-base">
            Browse, search, and find your next favorite film.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm md:text-base">
            Dive into detailed information, watch trailers, and keep track of
            your must-see list.
          </p>
          <button className="flex w-fit cursor-pointer items-center justify-center gap-1 rounded-md bg-[var(--brand-color-500)] p-3 font-medium md:text-base">
            <p>Get Started</p>
            <IconChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
