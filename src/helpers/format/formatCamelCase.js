const formatCamelCase = (job) => {
  return job
    ?.split(" ")
    .map((x, index) => {
      return index > 0
        ? x.charAt(0).toUpperCase() + x.slice(1)
        : x.charAt(0).toLowerCase() + x.slice(1);
    })
    .join("");
};

export default formatCamelCase;
