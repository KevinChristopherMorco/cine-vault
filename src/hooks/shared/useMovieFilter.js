import React from "react";

const useMovieFilter = () => {
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("asc");
  const [filterGenre, setFilterGenre] = useState([]);
};

export default useMovieFilter;
