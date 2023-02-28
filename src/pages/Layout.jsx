import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <Header />
      <div className="pb-5">
        <Outlet />
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
