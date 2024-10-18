const getCurrentDate = () => {
  const dateString = new Date()
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      timeZone: "UTC",
    })
    .split("/");

  const currentDate = `${dateString[2]}-${dateString[0]}-${dateString[1]}`;

  return currentDate;
};

export default getCurrentDate;
