import React from "react";

import ToolsInstagram from "./ToolsInstagram/ToolsInstagram";

export const ToolsPanelsComponent = ({ social, activeTab }) => {
  const ToolsPanelMap = {
    Instagram: <ToolsInstagram social={social} activeTab={activeTab} />,
  };

  return <>{ToolsPanelMap[social.title]}</>;
};

ToolsPanelsComponent.displayName = "ToolsPanels";
