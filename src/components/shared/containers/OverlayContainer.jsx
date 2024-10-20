import React from "react";

const OverlayContainer = ({ children }) => {
  return (
    <div className="flex flex-col gap-8 bg-[var(--bg-neutral)] p-5 lg:p-8">
      {children}
    </div>
  );
};

export default OverlayContainer;
