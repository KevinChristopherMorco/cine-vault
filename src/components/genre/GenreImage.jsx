import React from "react";

const GenreImage = ({ genreImage }) => {
  return (
    <div className="md:relative">
      <div className="right-0 z-[100] h-full bg-gradient-to-l from-[var(--brand-color-900)] opacity-100 transition-opacity duration-300 md:absolute md:w-[15%] lg:w-[20%]"></div>
      <div className="right-0 z-[100] h-full bg-gradient-to-l from-[var(--brand-color-900)] opacity-80 transition-opacity duration-300 md:absolute md:w-[15%] lg:w-[20%]"></div>

      <img src={genreImage} alt="" className="h-full w-full" />
    </div>
  );
};

export default GenreImage;
