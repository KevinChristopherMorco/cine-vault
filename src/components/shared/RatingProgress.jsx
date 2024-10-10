import React from "react";

const RatingProgress = () => {
  return (
    <div className="relative flex size-12 items-center justify-center rounded-full bg-[var(--brand-color-900)]">
      <svg
        className="size-[80%] -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-500"
          strokeWidth="2"
        ></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-green-500"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset="40"
          strokeLinecap="round"
        ></circle>
      </svg>

      <div className="absolute left-[50%] top-[50%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--background-color)]">
        <span className="text-color text-center text-[.8rem] font-bold">
          30
        </span>
        <span className="text-color text-center text-[.6rem] font-bold">%</span>
      </div>
    </div>
  );
};

export default RatingProgress;
