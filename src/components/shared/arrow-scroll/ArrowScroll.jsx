import React from "react";
import IconChevronLeft from "@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs";
import IconChevronRight from "@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs";

import useScreenResponsiveness from "../../../hooks/shared/useScreenResponsiveness";

const ArrowScroll = ({ hideLeftArrow, hideRightArrow, handleScroll }) => {
  const {
    screenSize: { lg, xl, xxl },
  } = useScreenResponsiveness();

  if (lg || xl || xxl) {
    return (
      <>
        {!hideLeftArrow && (
          <div
            id="scrollLeft"
            onClick={handleScroll}
            className="absolute -left-1 top-[50%] z-[99] flex h-[50%] -translate-y-[50%] cursor-pointer items-center rounded-xl bg-[var(--bg-neutral)] px-1 transition-colors hover:bg-[var(--bg-neutral-light)]"
          >
            <IconChevronLeft />
          </div>
        )}
        {!hideRightArrow && (
          <div
            id="scrollRight"
            onClick={handleScroll}
            className="absolute right-1 top-[50%] z-[99] flex h-[50%] -translate-y-[50%] cursor-pointer items-center rounded-xl bg-[var(--bg-neutral)] px-1 transition-colors hover:bg-[var(--bg-neutral-light)]"
          >
            <IconChevronRight />
          </div>
        )}
      </>
    );
  }
};

export default ArrowScroll;
