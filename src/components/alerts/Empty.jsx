import React from "react";
import IconExclamationCircleFilled from "@tabler/icons-react/dist/esm/icons/IconExclamationCircleFilled.mjs";

const Empty = ({ title, subtext }) => {
  return (
    <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-[var(--bg-neutral)] py-8">
      <IconExclamationCircleFilled className="" />
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-medium">{title}</p>
        {subtext && (
          <p className="w-[90%] w-full text-center text-sm font-light text-gray-400">
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
};

export default Empty;
