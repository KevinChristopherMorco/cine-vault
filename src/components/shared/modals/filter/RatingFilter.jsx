import React from "react";

import ModalHeading from "../heading/ModalHeading";

const RatingFilter = () => {
  return (
    <div className="flex flex-col gap-4">
      <ModalHeading title={"Ratings"} />
      <div className="flex flex-col gap-2">
        <p className="text-[.65rem] font-medium uppercase">User Rating</p>
        <div className="flex items-center justify-between gap-1">
          <input
            type="text"
            className="w-[45%] rounded-md border bg-transparent p-2"
          />
          <p>to</p>
          <input
            type="text"
            className="w-[45%] rounded-md border bg-transparent p-2"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[.65rem] font-medium uppercase">Number of Votes</p>
        <div className="flex items-center justify-between gap-1">
          <input
            type="text"
            className="w-[45%] rounded-md border bg-transparent p-2"
          />
          <p>to</p>
          <input
            type="text"
            className="w-[45%] rounded-md border bg-transparent p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default RatingFilter;
