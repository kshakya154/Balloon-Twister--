import { Outlet } from "react-router-dom";
import Header from "./Header/Header"; // ✅ Corrected import
import Footer from "./Footer/Footer"; // ✅ Corrected import

import React from "react";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
