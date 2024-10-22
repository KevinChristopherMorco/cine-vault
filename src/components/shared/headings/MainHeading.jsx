import React from "react";
import { Link } from "react-router-dom";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

const MainHeading = ({
  title,
  subtext,
  endpoint,
  number,
  isLink,
  isNumbered,
  hasSubtext,
}) => {
  return (
    <div className="flex w-fit flex-col gap-1 border-l-4 border-[var(--brand-color-500)] px-3 md:col-span-2">
      {isLink ? (
        <Link to={endpoint} className="group flex items-center gap-2">
          <p className="text-2xl font-bold">{title}</p>
          {isNumbered && <p className="text-sm">{number}</p>}
          <IconChevronRight className="h-5 w-5 transition-colors group-hover:text-[var(--brand-color-400)]" />
        </Link>
      ) : (
        <div className="flex items-center gap-1">
          <p className="text-2xl font-bold">{title}</p>
          {isNumbered && <p className="text-sm">{number}</p>}

          {/* <IconChevronRight className="h-5 w-5" /> */}
        </div>
      )}
      {hasSubtext && <p className="text-sm text-gray-400">{subtext}</p>}
    </div>
  );
};

export default MainHeading;
