import React from "react";
import classNames from "classnames";

import { TextVariants } from "../../constants/VariantsOfComponents";
import { Text } from "../Text";

export const StatusComponent = ({ variant, status, className }) => {
  const StatusClass = classNames(
    "status",
    {
      [`status_variant_${variant}`]: variant,
    },
    className
  );

  return (
    <div className={StatusClass}>
      <Text variant={TextVariants.subtitle_medium}>{status}</Text>
    </div>
  );
};

StatusComponent.displayName = "Status";
