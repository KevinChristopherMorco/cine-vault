const formatYear = (data) => {
  if (Object.prototype.toString.call(data) !== "[object Date]") return false;
  const year = new Date(data).toLocaleString("en-US", {
    year: "numeric",
  });

  return year;
};

export default formatYear;
