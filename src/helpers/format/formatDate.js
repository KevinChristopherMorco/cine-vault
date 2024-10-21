const formatDate = (data) => {
  const monthYear = new Date(data).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    day: "2-digit",
  });

  return monthYear;
};

export default formatDate;
