import React from "react";
import classNames from "classnames";

export const TabPanelComponent = ({ children, active, index, className }) => {
  const TabPanelClass = classNames("tabPanel", className);

  return <div className={TabPanelClass}>{active === index && children}</div>;
};

TabPanelComponent.displayName = "TabPanel";
