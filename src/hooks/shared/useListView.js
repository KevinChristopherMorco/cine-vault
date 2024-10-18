import { useState } from "react";

const useListView = () => {
  const [listType, setListType] = useState(
    localStorage.getItem("pageView") || "compactView",
  );

  return { listType, setListType };
};

export default useListView;
