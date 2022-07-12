import React from "react";
import classNames from "classnames";
import { Text } from "../Text";
import {
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";

export const TooltipComponent = ({
  text,
  isShow,
  arrowPosition = "left",
  coords,
  className,
}) => {
  const TooltipClass = classNames(
    "tooltip",
    {
      ["tooltip_show"]: isShow,
    },
    className
  );

  const ArrowClass = classNames({
    [`arrow_${arrowPosition}`]: arrowPosition,
  });

  const EditCoors = () => {
    if (coords.top) {
      return arrowPosition === "left"
        ? { left: coords.left, top: coords.top + 40 }
        : { left: coords.left - 340, top: coords.top + 40 };
    }
  };

  return (
    <div style={{ ...EditCoors() }} className={TooltipClass}>
      <SvgIcon
        className={ArrowClass}
        size={40}
        src={
          arrowPosition === "left"
            ? IconsVariants.Arrow_tooltip_left
            : IconsVariants.Arrow_tooltip_right
        }
      />
      <Text variant={TextVariants.h5_regular}>{text}</Text>
    </div>
  );
};

TooltipComponent.displayName = "Tooltip";
