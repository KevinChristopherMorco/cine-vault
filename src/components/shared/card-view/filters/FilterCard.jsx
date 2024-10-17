import React from "react";
import IconAdjustmentsAlt from "@tabler/icons-react/dist/esm/icons/IconAdjustmentsAlt.mjs";

const FilterCard = () => {
  return (
    <div className="col-span-2 flex w-full justify-between gap-3 lg:justify-end">
      <div className="cursor-pointer rounded-md bg-[var(--brand-color-500)] p-2 transition-colors hover:bg-[var(--brand-color-600)]">
        <IconAdjustmentsAlt />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">Sort By</p>
        <select
          name=""
          id=""
          className="cursor-pointer bg-[var(--bg-neutral)] p-2"
        >
          <option value="">Alphabetical</option>
          <option value="">Date Added</option>
        </select>
      </div>
    </div>
  );
};

export default FilterCard;
