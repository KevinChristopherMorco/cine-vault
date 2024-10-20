import React from "react";
import IconList from "@tabler/icons-react/dist/esm/icons/IconList.mjs";
import IconGridDots from "@tabler/icons-react/dist/esm/icons/IconGridDots.mjs";
import IconMenu2 from "@tabler/icons-react/dist/esm/icons/IconMenu2.mjs";

const CardViewToggle = ({ listType, setListType }) => {
  return (
    <div className="col-start-2 row-start-1 flex items-center justify-end gap-2">
      <IconList
        title={"Detailed View"}
        className={`cursor-pointer ${listType === "detailedView" ? "text-[var(--brand-color-300)]" : ""} `}
        onClick={() => setListType("detailedView")}
      />
      <IconGridDots
        title={"Grid View"}
        className={`cursor-pointer ${listType === "gridView" ? "text-[var(--brand-color-300)]" : ""} `}
        onClick={() => setListType("gridView")}
      />
      <IconMenu2
        title={"Compact View"}
        className={`cursor-pointer ${listType === "compactView" ? "text-[var(--brand-color-300)]" : ""} `}
        onClick={() => setListType("compactView")}
      />
    </div>
  );
};

export default CardViewToggle;
