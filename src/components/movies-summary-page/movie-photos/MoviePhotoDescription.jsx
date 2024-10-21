import React from "react";

const MoviePhotoDescription = ({ movieData }) => {
  const { title } = movieData;
  return (
    <div className="flex w-full flex-col gap-4 bg-[var(--bg-neutral)] px-2 py-4 text-sm">
      <div className="">
        <p>{title}</p>
      </div>
      <div className="w-full border-t border-gray-500"></div>
      <div className="my-4 grid grid-cols-[1fr_2fr] gap-y-4">
        <div>Directed By:</div>
        <div className="flex flex-wrap gap-2">
          <p>Peter Jackson</p>
          <p>Peter Jackson</p>
          <p>Peter Jackson</p>
          <p>Peter Jackson</p>
          <p>Peter Jackson</p>
        </div>
        <div>Starring:</div>
        <div className="flex flex-wrap gap-2">
          <p>Peter Jackson</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePhotoDescription;
