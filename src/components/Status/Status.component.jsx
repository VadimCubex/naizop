import React from "react";
import classNames from "classnames";

import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const StatusComponent = ({ variant, status, size, className }) => {
  const StatusClass = classNames(
    "status",
    {
      [`status_variant_${variant}`]: variant,
      [`status_size_${size}`]: size,
    },
    className
  );

  return (
    <div className={StatusClass}>
      <Text
        variant={
          size === "sm" ? TextVariants.subtitle_medium : TextVariants.h2_medium
        }
      >
        {status}
      </Text>
      {size === "bg" && (
        <div className="question">
          <SvgIcon
            src={IconsVariants.Question}
            size={20}
            color={ColorSvgVariants.white}
          />
        </div>
      )}
    </div>
  );
};

StatusComponent.displayName = "Status";
