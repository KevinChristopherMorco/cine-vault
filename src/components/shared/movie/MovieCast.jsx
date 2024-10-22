import React from "react";

const MovieCast = ({
  department,
  singularText,
  pluralText,
  isPreview,
  slice,
}) => {
  const handleSlice = () => {
    return slice ? slice : department;
  };
  return (
    <div
      className={`${isPreview ? "border-b border-t" : "flex-col"} flex gap-4 py-4`}
    >
      <p className={`${isPreview ? "w-[30%] md:w-[15%]" : ""} font-bold`}>
        {department.length > 1 ? pluralText : singularText}
      </p>
      <ul
        className={`${isPreview ? "flex flex-wrap gap-2" : department.length > 8 ? "grid grid-cols-2 gap-y-2" : "flex flex-col gap-2"} w-full`}
      >
        {handleSlice().map((people, index) => (
          <li key={index}>
            {people.name}
            {isPreview && index !== department.length - 1 && <span>,</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
