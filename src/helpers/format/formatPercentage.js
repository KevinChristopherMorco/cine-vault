import React from "react";

const formatPercentage = (vote) => {
  if (isNaN(vote)) return false;

  const calculatePercentage = (vote / 10) * 100;

  const percentageProperty = {
    percentageValue: "",
    percentageColor: "",
    overallVerdict: "",
  };

  if (calculatePercentage >= 70) {
    percentageProperty.percentageValue = calculatePercentage.toFixed(2);
    percentageProperty.percentageColor = "text-green-500";
    percentageProperty.overallVerdict = "Must-Watch";
  } else if (calculatePercentage >= 40) {
    percentageProperty.percentageValue = calculatePercentage.toFixed(2);
    percentageProperty.percentageColor = "text-yellow-500";
    percentageProperty.overallVerdict = "Average";
  } else if (calculatePercentage >= 30) {
    percentageProperty.percentageValue = calculatePercentage.toFixed(2);
    percentageProperty.percentageColor = "text-red-500";
    percentageProperty.overallVerdict = "Could be better";
  }

  return percentageProperty;
};

export default formatPercentage;
