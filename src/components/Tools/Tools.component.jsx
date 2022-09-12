import React from "react";

import { ToolsInfo } from "./constants";
import { ToolsCard } from "../Cards";

export const ToolsComponent = ({ onClick }) => {
  return (
    <>
      {ToolsInfo.map((item, index) => (
        <ToolsCard onClick={onClick} key={index} item={item} />
      ))}
    </>
  );
};

ToolsComponent.displayName = "Tools";
