import React from "react";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";
import { Link } from "react-router-dom";

const PageCard = ({ title, subtext, link }) => {
  return (
    <div className="flex flex-col gap-1">
      <Link
        to={`/movies-list/${link}`}
        className="group flex w-fit cursor-pointer items-center gap-1 transition-colors"
      >
        <p className="text-xl font-bold">{title}</p>
        <IconChevronRight className="h-5 w-5 group-hover:text-[var(--brand-color-500)]" />
      </Link>
      <p className="text-[.80rem] text-gray-400">{subtext}</p>
    </div>
  );
};

export default PageCard;
