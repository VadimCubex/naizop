import React from "react";
import classNames from "classnames";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

export const TabComponent = ({ title, titleComponent, className }) => {
  const TabClass = classNames("tab", className);

  return (
    <div className={TabClass}>
      {titleComponent ? (
        titleComponent
      ) : (
        <Text variant={TextVariants.h1}>{title}</Text>
      )}
    </div>
  );
};

TabComponent.displayName = "Tab";
