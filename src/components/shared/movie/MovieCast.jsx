import React from "react";
import IconUser from "@tabler/icons-react/dist/esm/icons/IconUser.mjs";

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
        className={`${isPreview ? "flex flex-wrap gap-2" : department.length > 8 ? "grid gap-y-5 md:grid-cols-2" : "flex flex-col gap-2"} w-full`}
      >
        {handleSlice().map((people, index) => (
          <li key={index}>
            {isPreview ? (
              <p>{people.name}</p>
            ) : (
              <div className="flex items-center gap-2">
                {people.profile_path ? (
                  <div
                    className="h-10 w-10 rounded-full bg-white bg-cover bg-center"
                    style={{
                      backgroundImage: `url(http://image.tmdb.org/t/p/w500${people.profile_path})`,
                    }}
                  ></div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-neutral)]">
                    <IconUser />
                  </div>
                )}

                <p>{people.name}</p>
              </div>
            )}

            {isPreview && index !== department.length - 1 && <span>,</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
