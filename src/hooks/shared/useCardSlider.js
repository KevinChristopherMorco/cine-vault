import { useEffect, useRef, useState } from "react";

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

  const updateArrowsVisibility = () => {
    if (sliderRef.current) {
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const currentScrollLeft = sliderRef.current.scrollLeft;

      setArrows({
        hideLeftArrow: currentScrollLeft <= 0,
        hideRightArrow: currentScrollLeft >= maxScrollLeft,
      });
    }
  };

  const handleScroll = (event) => {
    const { id } = event.target;

    if (id === "scrollRight") {
      scroll(370);
    }
    if (id === "scrollLeft") {
      scroll(-370);
    }

    updateArrowsVisibility();
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      updateArrowsVisibility();
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScrollEvent);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScrollEvent);
      }
    };
  }, []);

  return { arrows, sliderRef, handleScroll };
};

export default useCardSlider;
