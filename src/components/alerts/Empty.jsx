import React from "react";
import IconExclamationCircleFilled from "@tabler/icons-react/dist/esm/icons/IconExclamationCircleFilled.mjs";

const Empty = ({ title, subtext }) => {
  return (
    <div className="flex gap-5">
      <IconExclamationCircleFilled />
      <div className="flex flex-col gap-2">
        <p className="font-medium">{title}</p>
        <p className="w-[90%] text-sm font-light text-gray-400">{subtext}</p>
      </div>
    </div>
  );
};

export default Empty;
