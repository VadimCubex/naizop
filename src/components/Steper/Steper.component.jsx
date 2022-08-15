import React from "react";
import classNames from "classnames";

export const SteperComponent = ({ className }) => {
  const SteperClass = classNames("steper", className);

  return <div className={SteperClass}></div>;
};

SteperComponent.displayName = "Steper";
