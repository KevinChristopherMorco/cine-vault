import React from "react";
import { Link } from "react-router-dom";

import IconSearch from "@tabler/icons-react/dist/esm/icons/IconSearch.mjs";

const Header = () => {
  return (
    <nav className="fixed z-[999] flex w-full items-center bg-[var(--bg-neutral)] px-2 py-3">
      <Link to={"/"} className="flex w-full items-center font-bold">
        <p className="text-5xl text-[var(--brand-color-500)]">C</p>
        <p className="text-white">INEVAULT</p>
      </Link>
      <div>
        <div>
          <IconSearch className="h-5 w-5 animate-iconScale" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
