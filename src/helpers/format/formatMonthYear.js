const formatYear = (data) => {
  const monthYear = new Date(data).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return monthYear;
};

export default formatYear;
