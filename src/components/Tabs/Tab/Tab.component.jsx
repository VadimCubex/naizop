import React from "react";
import classNames from "classnames";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

export const TabComponent = ({ variant, title, titleComponent, className }) => {
  const TabClass = classNames(
    "tab",
    {
      [`tab_variant_${variant}`]: variant,
    },
    className
  );

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
