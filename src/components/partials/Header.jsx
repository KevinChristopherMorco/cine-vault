import React from "react";
import IconSearch from "@tabler/icons-react/dist/esm/icons/IconSearch.mjs";

const Header = () => {
  return (
    <nav className="fixed z-[999] flex w-full items-center bg-[var(--brand-color-900)] px-2 py-3">
      <div className="flex w-full items-center font-bold">
        <p className="text-5xl text-[var(--brand-color-500)]">C</p>
        <p className="text-white">INEVAULT</p>
      </div>
      <div>
        <div>
          <IconSearch className="animate-iconScale h-5 w-5" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
