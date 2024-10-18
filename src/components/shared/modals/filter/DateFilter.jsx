import React from "react";

import ModalHeading from "../heading/ModalHeading";
import { useFilterContext } from "../../../../hooks/shared/FilterProvider";

const DateFilter = () => {
  const {
    filterDate: { startDate, endDate },
    setFilterDate,
  } = useFilterContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilterDate((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex flex-col gap-4">
      <ModalHeading title={"Release Year"} />
      <div className="flex items-center justify-between gap-1 text-sm">
        <input
          type="date"
          name="startDate"
          className="w-[45%] rounded-md border bg-transparent p-1"
          onChange={handleChange}
          value={startDate}
        />
        <p>to</p>
        <input
          type="date"
          name="endDate"
          className="w-[45%] rounded-md border bg-transparent p-1"
          onChange={handleChange}
          value={endDate}
        />
      </div>
    </div>
  );
};

export default DateFilter;
