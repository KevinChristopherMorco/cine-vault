import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mb-[2rem] mt-[6rem] flex grow flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
