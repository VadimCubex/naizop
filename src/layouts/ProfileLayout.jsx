import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ProfileMenu, SidebarMenu } from "../components/Menu";

const ProfileLayout = () => {
  return (
    <>
      <ProfileMenu />
      <main className="profile-container">
        <SidebarMenu />
        <div className="profile-main-content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfileLayout;
