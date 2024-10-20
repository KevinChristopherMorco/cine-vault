import React from "react";

const CompactContainer = ({ children }) => {
  return <div className="flex flex-col gap-4 px-4 pb-4">{children}</div>;
};

export default CompactContainer;
