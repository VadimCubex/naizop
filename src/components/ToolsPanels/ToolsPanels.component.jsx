import React from "react";

import ToolsInstagram from "./ToolsInstagram/ToolsInstagram";
import ToolsTiktok from "./ToolsTiktok/ToolsTiktok";
import ToolsTwitter from "./ToolsTwitter/ToolsTwitter";
import ToolsYoutube from "./ToolsYoutube/ToolsYoutube";

export const ToolsPanelsComponent = ({ social, activeTab }) => {
  const ToolsPanelMap = {
    Instagram: <ToolsInstagram social={social} activeTab={activeTab} />,
    YouTube: <ToolsYoutube social={social} activeTab={activeTab} />,
    TikTok: <ToolsTiktok social={social} activeTab={activeTab} />,
    Twitter: <ToolsTwitter social={social} activeTab={activeTab} />,
  };

  return <>{ToolsPanelMap[social.title]}</>;
};

ToolsPanelsComponent.displayName = "ToolsPanels";
