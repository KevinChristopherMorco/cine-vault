import { useState } from "react";

const useListView = () => {
  const [listType, setListType] = useState("compactView");

  return { listType, setListType };
};

export default useListView;
