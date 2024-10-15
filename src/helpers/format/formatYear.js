const formatYear = (data) => {
  const chechDate = new Date(data);
  if (chechDate instanceof Date && !isNaN(chechDate)) {
    const year = new Date(data).toLocaleString("en-US", {
      year: "numeric",
    });

    return year;
  }

  return false;
};

export default formatYear;
