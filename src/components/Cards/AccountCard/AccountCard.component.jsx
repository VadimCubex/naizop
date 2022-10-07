import React from "react";
import { useState } from "react";
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
  subtitle,
  text,
  tooltip,
  className,
}) => {
  const [active, setActive] = useState(false);
  const AccountCardClass = classNames(
    "accountCard",
    "cursor-pointer",
    {
      [`accountCard_variant_${variant}`]: variant,
      active: active,
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

  const handleCardClick = () => {
    onClick && onClick();
    setActive(!active);
  };

  return (
    <div onClick={handleCardClick} className={AccountCardClass}>
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
      {subtitle && <Text variant={TextVariants.h3_regular}>{subtitle}</Text>}
      <Text variant={TextVariants.h3}>{text}</Text>
    </div>
  );
};

AccountCardComponent.displayName = "AccountCard";
