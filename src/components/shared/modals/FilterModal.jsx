import React from "react";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";
import GenreListFilter from "./filter/GenreListFilter";
import RatingFilter from "./filter/RatingFilter";
import DateFilter from "./filter/DateFilter";
import ModalHeading from "./heading/ModalHeading";

// import genresList from "../../../json/genresList.json";

const FilterModal = ({ setModal }) => {
  return (
    <div className="fixed left-0 top-0 z-[999] flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="flex h-full animate-modalScale flex-col gap-2 rounded-md bg-black p-6 md:h-fit md:w-[70%] xl:w-[45%]">
        <div className="flex justify-end">
          <IconX className="cursor-pointer" onClick={() => setModal(false)} />
        </div>
        <ModalHeading title={"ADVANCED FILTER"} />
        <div className="flex flex-col gap-8 overflow-y-scroll py-4 md:h-[30rem]">
          <GenreListFilter />
          <DateFilter />
          <RatingFilter />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
