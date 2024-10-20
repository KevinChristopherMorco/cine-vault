import React from "react";

const GridContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4">
      {children}
    </div>
  );
};

export default GridContainer;
