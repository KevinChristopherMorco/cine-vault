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
      <ul className="flex w-full flex-wrap gap-2">
        {handleSlice().map((people, index) => (
          <li key={index}>
            {people.name}
            {index !== department.length - 1 && <span>,</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
