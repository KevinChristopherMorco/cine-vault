import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconArrowNarrowUp from "@tabler/icons-react/dist/esm/icons/IconArrowNarrowUp.mjs";
import IconArrowNarrowDown from "@tabler/icons-react/dist/esm/icons/IconArrowNarrowDown.mjs";

import useMovieApi from "../../../hooks/axios/useMovieApi";
import formatYear from "../../../helpers/format/formatYear";

import ReviewCard from "./ReviewCard";

const MovieReviewContainer = () => {
  const { movieData, isLoading, handleSpecificEndpoint } = useMovieApi();
  const { movieID } = useParams();
  const [filter, setFilter] = useState(0);
  const [order, setOrder] = useState("desc");
  const [sort, setSort] = useState("rating");
  console.log(movieData);

  useEffect(() => {
    handleSpecificEndpoint(movieID);
  }, [movieID]);

  if (isLoading) return;

  const {
    title,
    release_date,
    poster_path,
    reviews: { results: movieReviews },
  } = movieData;

  const handleFilterChange = (e) => {
    setFilter(Number(e.target.value));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleSort = (a, b) => {
    const aValue =
      sort === "rating" ? a.author_details.rating : new Date(a.created_at);
    const bValue =
      sort === "rating" ? b.author_details.rating : new Date(b.created_at);

    return order === "asc" ? aValue - bValue : bValue - aValue;
  };

  return (
    <div className="flex flex-col gap-10 px-4 py-2">
      <div className="flex gap-2">
        <div className="w-[20%]">
          <img
            src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="font-medium">{title}</p>
            <p className="text-[.75rem]">({formatYear(release_date)})</p>
          </div>
          <p className="text-xl font-bold">User Reviews</p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1.5fr] gap-y-4">
        <p>Filter by rating</p>
        <select
          name=""
          id=""
          className="border bg-[var(--brand-color-900)] p-1"
          onChange={handleFilterChange}
        >
          <option value={0}>All Stars</option>
          {Array.from({ length: 10 }).map((_, index) => (
            <option key={index} value={10 - index}>
              {10 - index} {index + 1 === 10 ? "Star" : "Stars"}
            </option>
          ))}
        </select>

        <p>Sort By</p>

        <div className="col-start-2 row-start-2 flex justify-between">
          <select
            name=""
            id=""
            className="w-[90%] border bg-[var(--brand-color-900)] p-1"
            onChange={handleSortChange}
          >
            {[
              { value: "rating", name: "Review Rating" },
              { value: "date", name: "Review Date" },
            ].map((option, index) => (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <div
            className="flex animate-fadeIn cursor-pointer items-center"
            onClick={() =>
              setOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
          >
            <IconArrowNarrowDown
              className={`${order === "desc" ? "text-[var(--brand-color-400)]" : ""} -mx-2 h-4 w-4`}
            />
            <IconArrowNarrowUp
              className={`${order === "asc" ? "text-[var(--brand-color-400)]" : ""} -mx-4 h-4 w-4`}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {movieReviews
          .filter((x) => filter === 0 || x.author_details.rating === filter)
          .sort((a, b) => handleSort(a, b))
          //   .sort((a, b) => b.author_details.rating - a.author_details.rating)
          .map((review, index) => {
            return <ReviewCard key={index} reviewData={review} />;
          })}
      </div>
    </div>
  );
};

export default MovieReviewContainer;
