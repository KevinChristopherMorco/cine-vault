import React, { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleChoosePage = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    handlePreviousPage,
    handleNextPage,
    handleChoosePage,
  };
};

export default usePagination;
