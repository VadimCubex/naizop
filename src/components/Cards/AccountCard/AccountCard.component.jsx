import React from "react";
import classNames from "classnames";

import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { TooltipPortal } from "../../Portal";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import { Tooltip } from "../../Tooltip";

import useTooltip from "../../../hooks/useTooltip";

export const AccountCardComponent = ({
  variant,
  onClick,
  text,
  tooltip,
  className,
}) => {
  const AccountCardClass = classNames(
    "accountCard",
    {
      [`accountCard_variant_${variant}`]: variant,
    },
    className
  );
  const {
    coords,
    isShowTooltip,
    tooltipPosition,
    tooltipSvg,
    TooltipWidth,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  } = useTooltip();

  return (
    <div onClick={onClick} className={AccountCardClass}>
      {tooltip && (
        <>
          <TooltipPortal>
            <Tooltip
              width={TooltipWidth}
              coords={coords}
              arrowPosition={tooltipPosition}
              isShow={isShowTooltip}
              text={tooltip}
            />
          </TooltipPortal>
          <div
            ref={tooltipSvg}
            onTouchEnd={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="question"
          >
            <SvgIcon
              size={20}
              color={ColorSvgVariants.white}
              src={IconsVariants.Question}
            />
          </div>
        </>
      )}
      <Text variant={TextVariants.h3}>{text}</Text>
    </div>
  );
};

AccountCardComponent.displayName = "AccountCard";
