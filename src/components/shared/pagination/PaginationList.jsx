import React from "react";
import IconChevronLeft from "@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

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
    <div className="col-span-2 flex w-full items-center gap-4 bg-[var(--brand-color-900)]">
      <button
        className="cursor-pointer"
        onClick={() => {
          handlePreviousPage();
        }}
      >
        <IconChevronLeft />
      </button>
      <ul className="flex w-fit flex-wrap items-center gap-2 py-2">
        {formatPagination(
          currentPage,
          Math.ceil(movieData.total_results / parseInt(offset)),
          1,
        ).map((paginateNumber) => {
          if (paginateNumber === "...") {
            return (
              <li className="p-4 text-sm md:text-base">{paginateNumber}</li>
            );
          }

          return (
            <li
              className={`${currentPage === paginateNumber ? "rounded-full bg-[var(--brand-color-500)]" : ""} flex h-10 w-10 cursor-pointer items-center justify-center p-2 text-sm md:text-base`}
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
        <IconChevronRight />
      </button>
    </div>
  );
};

export default PaginationList;
