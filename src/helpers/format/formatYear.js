const formatYear = (data) => {
  const year = new Date(data).toLocaleString("en-US", {
    year: "numeric",
  });

  return year;
};

export default formatYear;
