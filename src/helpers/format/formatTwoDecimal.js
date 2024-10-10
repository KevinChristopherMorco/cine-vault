import React from "react";

const formatTwoDecimal = (data) => {
  if (typeof data === "string") parseFloat(data);

  const decimal = data.toFixed(2);

  return decimal;
};

export default formatTwoDecimal;
