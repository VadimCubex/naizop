import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import RedeemHistory from "../pages/RedeemHistory/RedeemHistory";
import Support from "../pages/Support/Support";
import TestComponents from "../pages/TestComponents";

const NaizopRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<TestComponents />} />
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/service" element={<Home />} />
        <Route path="/faq" element={<FAQ className="background-img" />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/about" element={<About className="background-img" />} />
      </Route>
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/profile/account" element={<Dashboard />} />
        <Route path="/profile/redeem-history" element={<RedeemHistory />} />
        <Route path="/profile/support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default NaizopRoutes;
