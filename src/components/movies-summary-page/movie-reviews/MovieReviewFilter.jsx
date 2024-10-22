import React from "react";
import IconArrowNarrowUp from "@tabler/icons-react/dist/esm/icons/IconArrowNarrowUp.mjs";
import IconArrowNarrowDown from "@tabler/icons-react/dist/esm/icons/IconArrowNarrowDown.mjs";

const MovieReviewFilter = ({
  handleFilterChange,
  handleSortChange,
  handleOrderChange,
  order,
}) => {
  return (
    <div className="grid grid-cols-[1fr_1.5fr] gap-y-4 lg:row-start-2">
      <p>Filter by rating</p>
      <select
        className="transiton-colors cursor-pointer border bg-[var(--brand-color-900)] p-1 hover:bg-[var(--bg-neutral-light)]"
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
          className="transiton-colors w-[90%] cursor-pointer border bg-[var(--brand-color-900)] p-1 hover:bg-[var(--bg-neutral-light)]"
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
          onClick={handleOrderChange}
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
  );
};

export default MovieReviewFilter;
