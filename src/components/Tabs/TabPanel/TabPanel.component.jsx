import React from "react";
import classNames from "classnames";

export const TabPanelComponent = ({
  variant,
  children,
  active,
  index,
  className,
}) => {
  const TabPanelClass = classNames(
    "tabPanel",
    {
      [`tabPanel_variant_${variant}`]: variant,
    },
    className
  );

  return <div className={TabPanelClass}>{active === index && children}</div>;
};

TabPanelComponent.displayName = "TabPanel";
