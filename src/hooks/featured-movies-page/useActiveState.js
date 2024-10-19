import React, { useEffect, useState } from "react";

const useActiveState = () => {
  const [viewType, setViewType] = useState(
    localStorage.getItem("pageView") || "compactView",
  );
  const [activeType, setActiveType] = useState(
    localStorage.getItem("pageView") || "compactView",
  );

  const handleActiveState = (type) => {
    setViewType(type);
    setActiveType(type);
  };

  useEffect(() => {
    localStorage.setItem("pageView", viewType);
  }, [viewType]);

  return { viewType, activeType, handleActiveState };
};

export default useActiveState;
