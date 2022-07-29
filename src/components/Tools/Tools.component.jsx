import React from "react";

import { ToolsInfo } from "./constants";
import { ToolsCard } from "../Cards";

export const ToolsComponent = () => {
  return (
    <>
      {ToolsInfo.map((item, index) => (
        <ToolsCard key={index} item={item} />
      ))}
    </>
  );
};

ToolsComponent.displayName = "Tools";
