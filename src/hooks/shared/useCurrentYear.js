import React, { useEffect, useState } from "react";

const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    const year = new Date().toLocaleString("en-US", {
      year: "numeric",
      timeZone: "UTC",
    });
    setCurrentYear(year);
  }, []);

  return { currentYear };
};

export default useCurrentYear;
