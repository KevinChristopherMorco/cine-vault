import React from "react";
import { Link } from "react-router-dom";

import IconStarFilled from "@tabler/icons-react/dist/esm/icons/IconStarFilled.mjs";
import IconPhotoOff from "@tabler/icons-react/dist/esm/icons/IconPhotoOff.mjs";

import formatVoteAverage from "../../../helpers/format/formatVoteAverage";
import formatYear from "../../../helpers/format/formatYear";
import formatRuntime from "../../../helpers/format/formatRuntime";
import getCurrentDate from "../../../helpers/getCurrentDate";
import MovieCard from "../movie/MovieCard";
import GridContainer from "../containers/card-view/GridContainer";

const GridView = ({ movieData, isLoading }) => {
  if (isLoading) return;

  return (
    <GridContainer>
      {movieData.results.map((movie, index) => {
        return <MovieCard key={index} data={movie} cardType={"grid"} />;
      })}
    </GridContainer>
  );
};

export default GridView;
