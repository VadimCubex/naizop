import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "components/Footer";
import { ProfileMenu, SidebarMenu } from "components/Menu";
import { ProgressGradient } from "components/ProgressGradient";

const ProfileLayout = () => {
  return (
    <>
      <ProfileMenu />
      <ProgressGradient />
      <main className="profile-container background-img">
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
