import React from "react";

import formatPagination from "../../../helpers/pagination/formatPagination";

const PaginationList = ({
  movieData,
  offset,
  currentPage,
  handlePreviousPage,
  handleNextPage,
  handleChoosePage,
  handleOffset,
}) => {
  return (
    <div className="flex items-center gap-4">
      <button
        className="cursor-pointer"
        onClick={() => {
          handlePreviousPage();
        }}
      >
        Previous
      </button>
      <ul className="flex w-fit gap-2 py-2">
        {formatPagination(
          currentPage,
          Math.ceil(movieData.total_results / parseInt(offset)),
          2,
        ).map((paginateNumber) => {
          if (paginateNumber === "...") {
            return <li>{paginateNumber}</li>;
          }

          return (
            <li
              className="cursor-pointer"
              onClick={() => handleChoosePage(paginateNumber)}
            >
              {paginateNumber}
            </li>
          );
        })}
      </ul>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleNextPage();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationList;
