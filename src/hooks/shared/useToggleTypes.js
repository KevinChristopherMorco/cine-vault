import { useState } from "react";

const useToggleTypes = () => {
  const [toggle, setToggle] = useState({ trendingType: "day" });

  const handleToggle = (value) => {
    setToggle(value);
  };

  return { toggle, handleToggle };
};

export default useToggleTypes;
