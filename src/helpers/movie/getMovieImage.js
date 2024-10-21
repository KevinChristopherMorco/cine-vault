import { useState } from "react";

const getMovieImage = (backdrops, posters, logos) => {
  return [...(backdrops ?? []), ...(posters ?? []), ...(logos ?? [])];
};

export default getMovieImage;
