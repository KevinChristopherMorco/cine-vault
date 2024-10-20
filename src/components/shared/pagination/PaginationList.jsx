import React from "react";
import IconChevronLeft from "@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

import formatPagination from "../../../helpers/pagination/formatPagination";

const PaginationList = ({
  movieData,
  currentPage,
  handlePreviousPage,
  handleNextPage,
  handleChoosePage,
}) => {
  const checkPageLimit =
    movieData.total_pages > 500 ? 500 : movieData.total_pages;
  return (
    <div className="col-span-2 flex w-full items-center gap-4 bg-[var(--brand-color-900)]">
      {currentPage > 1 && (
        <button
          className="cursor-pointer"
          onClick={() => {
            handlePreviousPage();
          }}
        >
          <IconChevronLeft />
        </button>
      )}

      <ul className="flex w-fit flex-wrap items-center gap-2 py-2">
        {formatPagination(currentPage, checkPageLimit, 1).map(
          (paginateNumber, index) => {
            if (paginateNumber === "...") {
              return (
                <li key={index} className="p-4 text-sm md:text-base">
                  {paginateNumber}
                </li>
              );
            }

            return (
              <li
                key={index}
                className={`${currentPage === paginateNumber ? "rounded-full bg-[var(--brand-color-500)]" : ""} flex h-10 w-10 cursor-pointer items-center justify-center p-2 text-sm md:text-base`}
                onClick={() => handleChoosePage(paginateNumber)}
              >
                {paginateNumber}
              </li>
            );
          },
        )}
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
