import React, { useEffect, useState } from "react";

import IconList from "@tabler/icons-react/dist/esm/icons/IconList.mjs";
import IconGridDots from "@tabler/icons-react/dist/esm/icons/IconGridDots.mjs";
import IconMenu2 from "@tabler/icons-react/dist/esm/icons/IconMenu2.mjs";

import useActiveState from "../../hooks/featured-movies-page/useActiveState";

import CompactView from "./grid/CompactView";
import GridView from "./grid/GridView";
import DetailedView from "./grid/DetailedView";

const ListView = ({ allMovieList, isLoading }) => {
  const { viewType, activeType, handleActiveState } = useActiveState();

  const renderView = () => {
    switch (viewType) {
      case "compactView":
        return (
          <CompactView allMovieList={allMovieList} isLoading={isLoading} />
        );
      case "gridView":
        return <GridView allMovieList={allMovieList} isLoading={isLoading} />;
      case "detailedView":
        return (
          <DetailedView allMovieList={allMovieList} isLoading={isLoading} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex animate-fadeIn flex-col gap-10">
      <div className="flex justify-end gap-2 px-2">
        <IconList
          title={"Detailed View"}
          className={`cursor-pointer ${activeType === "detailedView" ? "text-[var(--brand-color-300)]" : ""} `}
          onClick={() => handleActiveState("detailedView")}
        />
        <IconGridDots
          title={"Grid View"}
          className={`cursor-pointer ${activeType === "gridView" ? "text-[var(--brand-color-300)]" : ""} `}
          onClick={() => handleActiveState("gridView")}
        />
        <IconMenu2
          title={"Compact View"}
          className={`cursor-pointer ${activeType === "compactView" ? "text-[var(--brand-color-300)]" : ""} `}
          onClick={() => handleActiveState("compactView")}
        />
      </div>
      {renderView()}
    </div>
  );
};

export default ListView;
