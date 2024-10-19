const formatPagination = (currentPage, totalPages, siblingCount) => {
  const pagination = [];

  if (currentPage > 1 + siblingCount) {
    pagination.push(1);
  }

  if (currentPage > 2 + siblingCount) {
    pagination.push("...");
  }

  const start = Math.max(1, currentPage - siblingCount);
  const end = Math.min(totalPages - 1, currentPage + siblingCount);

  for (let i = start; i <= end; i++) {
    pagination.push(i);
  }

  if (currentPage < totalPages - 1 - siblingCount) {
    pagination.push("...");
  }

  if (currentPage < totalPages - siblingCount) {
    pagination.push(totalPages);
  }

  return pagination;
};

export default formatPagination;
