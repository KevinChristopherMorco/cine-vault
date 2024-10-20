import React from "react";
import { Link } from "react-router-dom";

import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";

import getMovieCertification from "../../../helpers/movie/getMovieCertification";
import formatVoteAverage from "../../../helpers/format/formatVoteAverage";
import formatRuntime from "../../../helpers/format/formatRuntime";
import formatYear from "../../../helpers/format/formatYear";
import MovieCard from "../movie/MovieCard";

const CompactView = ({ movieData, isLoading }) => {
  if (isLoading) return;
  return (
    <div className="col-span-2 flex flex-col gap-4 lg:col-span-1 lg:col-start-1">
      {movieData.results.map((movie, index) => {
        return <MovieCard key={index} data={movie} cardType={"compact"} />;
      })}
    </div>
  );
};

export default CompactView;
