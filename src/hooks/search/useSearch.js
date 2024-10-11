import React, { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState({ toggle: false, view: false });

  return { search, setSearch };
};

export default useSearch;
