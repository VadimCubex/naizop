import React from "react";
import classNames from "classnames";

import {
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const TooltipComponent = ({
  text,
  isShow,
  isLeft = false,
  arrowPosition = "left",
  coords,
  width,
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
      if (isLeft) {
        return { left: coords.left - 75, top: coords.top + 50 };
      }
      return arrowPosition === "left"
        ? { left: coords.left, top: coords.top + 40 }
        : { left: coords.left - width, top: coords.top + 40 };
    }
  };

  return (
    <div style={{ ...EditCoors(), width: width }} className={TooltipClass}>
      <SvgIcon
        className={ArrowClass}
        size={40}
        src={
          arrowPosition === "left"
            ? IconsVariants.Arrow_tooltip_left
            : IconsVariants.Arrow_tooltip_right
        }
        style={arrowPosition === "right" ? { left: width - 39 } : { left: -3 }}
      />
      <Text variant={TextVariants.h5_regular}>{text}</Text>
    </div>
  );
};

TooltipComponent.displayName = "Tooltip";
