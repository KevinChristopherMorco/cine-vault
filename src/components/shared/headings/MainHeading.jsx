import React from "react";
import { Link } from "react-router-dom";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

const MainHeading = ({ title, subtext, endpoint, isLink, hasSubtext }) => {
  return (
    <div className="flex flex-col gap-1 border-l-4 border-[var(--brand-color-500)] px-3">
      {isLink ? (
        <Link
          to={`/movies-list/${endpoint}`}
          className="flex items-center gap-1"
        >
          <p className="text-2xl font-bold">{title}</p>
          <IconChevronRight className="h-5 w-5" />
        </Link>
      ) : (
        <div className="flex items-center gap-1">
          <p className="text-2xl font-bold">{title}</p>
          <IconChevronRight className="h-5 w-5" />
        </div>
      )}
      {hasSubtext && <p className="text-sm text-gray-400">{subtext}</p>}
    </div>
  );
};

export default MainHeading;
