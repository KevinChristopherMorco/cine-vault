import React from "react";

import ModalHeading from "../heading/ModalHeading";
import { useFilterContext } from "../../../../hooks/shared/FilterProvider";

const RatingFilter = () => {
  const {
    filterRating: { minRating, maxRating },
    filterVotes: { minVotes, maxVotes },
    setFilterRating,
    setFilterVotes,
  } = useFilterContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { group } = event.target.dataset;
    if (group === "rating") {
      setFilterRating((prev) => ({ ...prev, [name]: value }));
      return;
    }

    if (group === "vote") {
      setFilterVotes((prev) => ({ ...prev, [name]: value }));
      return;
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <ModalHeading title={"Ratings"} />
      <div className="flex flex-col gap-2 text-sm">
        <p className="text-[.65rem] font-medium uppercase">User Rating</p>
        <div className="flex items-center justify-between gap-1">
          <input
            type="number"
            className="w-[45%] rounded-md border bg-transparent p-1"
            name="minRating"
            data-group="rating"
            onChange={handleChange}
            value={minRating}
            placeholder="0"
            min={0}
          />
          <p>to</p>
          <input
            type="number"
            className="w-[45%] rounded-md border bg-transparent p-1"
            data-group="rating"
            name="maxRating"
            onChange={handleChange}
            value={maxRating}
            placeholder="10"
            max={10}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <p className="text-[.65rem] font-medium uppercase">Number of Votes</p>
        <div className="flex items-center justify-between gap-1">
          <input
            type="number"
            className="w-[45%] rounded-md border bg-transparent p-1"
            name="minVotes"
            data-group="vote"
            onChange={handleChange}
            value={minVotes}
            placeholder="0"
            min={0}
          />
          <p>to</p>
          <input
            type="number"
            className="w-[45%] rounded-md border bg-transparent p-1"
            name="maxVotes"
            data-group="vote"
            onChange={handleChange}
            value={maxVotes}
            placeholder="10000"
          />
        </div>
      </div>
    </div>
  );
};

export default RatingFilter;
