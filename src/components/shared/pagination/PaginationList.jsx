import React from "react";

const PaginationList = ({
  handlePreviousPage,
  handleNextPage,
  handleOffset,
}) => {
  return (
    <div className="flex items-center gap-4">
      <button
        className="cursor-pointer"
        onClick={() => {
          handlePreviousPage();
        }}
      >
        Previous
      </button>
      <ul className="flex gap-2">
        <li className="cursor-pointer" data-value="1">
          1
        </li>
        <li className="cursor-pointer" data-value="2">
          2
        </li>
        <li className="cursor-pointer" data-value="3">
          3
        </li>
        <li className="cursor-pointer" data-value="4">
          4
        </li>
      </ul>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleNextPage();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationList;
