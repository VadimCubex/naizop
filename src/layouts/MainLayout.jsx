import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../components/Footer";
import { MainMenu } from "../components/Menu";

const MainLayout = () => {
  return (
    <>
      <MainMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
