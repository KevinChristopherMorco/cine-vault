import React, { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageActive, setPageActive] = useState("1");
  const [offset, setOffset] = useState("10");

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleOffset = (offset) => {
    setOffset(offset);
  };

  return {
    currentPage,
    pageActive,
    handlePreviousPage,
    handleNextPage,
    handleOffset,
  };
};

export default usePagination;
