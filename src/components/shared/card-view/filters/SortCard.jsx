import React from "react";
import IconAdjustmentsAlt from "@tabler/icons-react/dist/esm/icons/IconAdjustmentsAlt.mjs";
import IconArrowNarrowUp from "@tabler/icons-react/dist/esm/icons/IconArrowNarrowUp.mjs";
import IconArrowNarrowDown from "@tabler/icons-react/dist/esm/icons/IconArrowNarrowDown.mjs";
import { useFilterContext } from "../../../../hooks/shared/FilterProvider";

const SortCard = ({ setModal }) => {
  const { sort, order, setSort, setOrder } = useFilterContext();

  const handleChange = (event) => {
    const { value } = event.target;
    setSort(value);
  };

  return (
    <div className="col-span-2 row-start-2 flex w-full items-center justify-between">
      <div
        className="cursor-pointer rounded-md bg-[var(--brand-color-500)] p-2 transition-colors hover:bg-[var(--brand-color-600)]"
        onClick={() => setModal(true)}
      >
        <IconAdjustmentsAlt />
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Sort By</p>
          <select
            name=""
            id=""
            className="cursor-pointer bg-[var(--bg-neutral)] p-2"
            onChange={handleChange}
          >
            <option value="">Sort</option>
            <option value="title">Alphabetical</option>
            <option value="release_date">Date Added</option>
            <option value="vote_average">Rating</option>
          </select>
        </div>
        {sort && (
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
        )}
      </div>
    </div>
  );
};

export default SortCard;
