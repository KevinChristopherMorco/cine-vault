import React, { useRef, useState } from "react";

const useCardSlider = () => {
  const [arrows, setArrows] = useState({
    hideRightArrow: false,
    hideLeftArrow: true,
  });

  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  const handleScroll = (event) => {
    const { id } = event.target;
    let maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (id === "scrollRight") {
      scroll(370);
      if (sliderRef.current.scrollLeft >= maxScrollLeft - 370) {
        setArrows(() => ({ ...prev, hideRightArrow: true }));
        return;
      } else {
        setArrows(() => ({ hideLeftArrow: false, hideRightArrow: false }));
      }
    }
    if (id === "scrollLeft") {
      scroll(-370);

      if (sliderRef.current.scrollLeft - 370 === 0) {
        setArrows(() => ({ hideLeftArrow: true, hideRightArrow: false }));
        return;
      } else {
        setArrows(() => ({ hideLeftArrow: false, hideRightArrow: false }));
      }
    }
  };

  return { arrows, sliderRef, handleScroll };
};

export default useCardSlider;
