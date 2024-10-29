import React from "react";
import { Outlet } from "react-router-dom";

import useSidebar from "../hooks/shared/useSidebar";

import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import Sidebar from "../components/partials/Sidebar";

const Layout = () => {
  const { isVisible, isToggle, handleToggle } = useSidebar();

  return (
    <>
      <Header handleToggle={handleToggle} />
      <main className="mb-[2rem] mt-[6rem] flex grow flex-col">
        <Outlet />
      </main>
      <Footer />
      {isVisible && <Sidebar isToggle={isToggle} handleToggle={handleToggle} />}
    </>
  );
};

export default Layout;
