import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("asc");
  const [filterGenre, setFilterGenre] = useState([]);

  console.log(filter);

  const formatGenre = filterGenre.map((genre) => genre.genreID).join(",");

  return (
    <FilterContext.Provider
      value={{
        filter,
        order,
        filterGenre,
        setFilter,
        setOrder,
        setFilterGenre,
        formatGenre,
      }}
    >
      {children}
    </FilterContext.Provider>
  );

  //

  //   return {
  //     filter,
  //     order,
  //     filterGenre,
  //     setFilter,
  //     setOrder,
  //     setFilterGenre,
  //     formatGenre,
  //   };
};

const useFilterContext = () => useContext(FilterContext);

export default FilterProvider;
export { useFilterContext };
