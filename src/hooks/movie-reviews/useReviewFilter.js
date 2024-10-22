import React, { useState } from "react";

const useReviewFilter = () => {
  const [filter, setFilter] = useState(0);
  const [order, setOrder] = useState("desc");
  const [sort, setSort] = useState("rating");

  const handleFilterChange = (e) => {
    setFilter(Number(e.target.value));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleOrderChange = () => {
    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleSort = (a, b) => {
    const aValue =
      sort === "rating" ? a.author_details.rating : new Date(a.created_at);
    const bValue =
      sort === "rating" ? b.author_details.rating : new Date(b.created_at);

    return order === "asc" ? aValue - bValue : bValue - aValue;
  };

  return {
    filter,
    order,
    handleFilterChange,
    handleSortChange,
    handleOrderChange,
    handleSort,
  };
};

export default useReviewFilter;
