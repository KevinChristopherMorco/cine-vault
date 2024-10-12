import React, { useState } from "react";
import IconList from "@tabler/icons-react/dist/esm/icons/IconList.mjs";
import IconGridDots from "@tabler/icons-react/dist/esm/icons/IconGridDots.mjs";
import IconMenu2 from "@tabler/icons-react/dist/esm/icons/IconMenu2.mjs";

const ListView = () => {
  const [listActive, setListActive] = useState(true);
  return (
    <div className="flex justify-end gap-2 px-2">
      <IconList title={"Detailed View"} className="cursor-pointer" />
      <IconGridDots title={"Grid View"} className="cursor-pointer" />
      <IconMenu2 title={"Compact View"} className="cursor-pointer" />
    </div>
  );
};

export default ListView;
