import React from "react";

const GenreImage = ({ genreImage }) => {
  return (
    <div className="md:relative">
      <div className="right-0 z-[100] h-full w-[25%] bg-gradient-to-l from-[var(--brand-color-900)] md:absolute"></div>
      <div className="right-0 z-[100] h-full w-[25%] bg-gradient-to-l from-[var(--brand-color-900)] md:absolute"></div>
      <div className="right-0 z-[100] h-full w-[25%] bg-gradient-to-l from-[var(--brand-color-900)] md:absolute"></div>
      <div className="right-0 z-[100] h-full w-[25%] bg-gradient-to-l from-[var(--brand-color-900)] md:absolute"></div>

      <img src={genreImage} alt="" className="h-full" />
    </div>
  );
};

export default GenreImage;
