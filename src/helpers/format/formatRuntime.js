import React from "react";

const formatRuntime = (runtime) => {
  if (isNaN(runtime) || runtime < 1) return false;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours > 0 ? `${hours}h` : ""} ${minutes > 0 ? `${minutes}m` : ""}`;
};

export default formatRuntime;
