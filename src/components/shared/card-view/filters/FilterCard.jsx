import React from "react";
import IconAdjustmentsAlt from "@tabler/icons-react/dist/esm/icons/IconAdjustmentsAlt.mjs";
import IconArrowNarrowUp from "@tabler/icons-react/dist/esm/icons/IconArrowNarrowUp.mjs";
import IconArrowNarrowDown from "@tabler/icons-react/dist/esm/icons/IconArrowNarrowDown.mjs";

const FilterCard = ({ order, setOrder, setFilter }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <div className="col-span-2 flex w-full justify-between gap-6 lg:justify-end">
      <div className="cursor-pointer rounded-md bg-[var(--brand-color-500)] p-2 transition-colors hover:bg-[var(--brand-color-600)]">
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
            <option value="">Choose</option>
            <option value="title">Alphabetical</option>
            <option value="">Date Added</option>
          </select>
        </div>
        <div
          className="flex cursor-pointer items-center"
          onClick={() => setOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
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

export default FilterCard;
