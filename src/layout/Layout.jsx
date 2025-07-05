import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/views/Navbar";
import Footer from "../components/views/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* <main className="flex-grow container px-4 sm:px-6 lg:px-[100px] py-12"> */}
      <main className="flex-grow container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
