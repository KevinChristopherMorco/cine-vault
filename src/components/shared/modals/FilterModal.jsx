import React from "react";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";
import GenreListFilter from "./filter/GenreListFilter";
import RatingFilter from "./filter/RatingFilter";
import DateFilter from "./filter/DateFilter";

// import genresList from "../../../json/genresList.json";

const FilterModal = ({ filterGenre, setModal, setFilterGenre }) => {
  return (
    <div className="fixed left-0 top-0 z-[999] flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="flex h-full animate-modalScale flex-col gap-2 rounded-md bg-black p-6 md:w-[70%] xl:w-[45%]">
        <div className="flex justify-end">
          <IconX className="cursor-pointer" onClick={() => setModal(false)} />
        </div>
        <div className="flex flex-col gap-8 overflow-y-scroll py-4">
          <GenreListFilter
            filterGenre={filterGenre}
            setFilterGenre={setFilterGenre}
          />
          <DateFilter />
          <RatingFilter />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
