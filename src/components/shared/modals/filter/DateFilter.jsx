import React from "react";

import ModalHeading from "../heading/ModalHeading";

const DateFilter = () => {
  return (
    <div className="flex flex-col gap-4">
      <ModalHeading title={"Release Year"} />
      <input
        type="text"
        className="w-full rounded-md border bg-transparent p-2"
      />
    </div>
  );
};

export default DateFilter;
