import React from "react";
import classNames from "classnames";

import {
  NumberVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Text } from "../Text";

export const NumberComponent = ({ variant, number, className }) => {
  const NumberClass = classNames(
    "number",
    {
      [`number_variant_${variant}`]: variant,
    },
    className
  );

  const NumberVariantMap = {
    [NumberVariants.lg]: TextVariants.h1,
    [NumberVariants.md]: TextVariants.h1,
    [NumberVariants.sm]: TextVariants.h5,
  };

  return (
    <div className={NumberClass}>
      <Text variant={NumberVariantMap[variant]}>{number}</Text>
    </div>
  );
};

NumberComponent.displayName = "Number";
