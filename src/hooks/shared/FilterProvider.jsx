import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("asc");
  const [filterGenre, setFilterGenre] = useState([]);
  const [filterDate, setFilterDate] = useState({ startDate: "", endDate: "" });
  const [filterRating, setFilterRating] = useState({
    minRating: "",
    maxRating: "",
  });

  const [filterVotes, setFilterVotes] = useState({
    minVotes: "",
    maxVotes: "",
  });

  const formatGenre = filterGenre.map((genre) => genre.genreID).join(",");

  return (
    <FilterContext.Provider
      value={{
        sort,
        order,
        filterGenre,
        filterDate,
        filterRating,
        filterVotes,
        setSort,
        setOrder,
        setFilterGenre,
        setFilterDate,
        setFilterRating,
        setFilterVotes,
        formatGenre,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export default FilterProvider;
export { useFilterContext };
