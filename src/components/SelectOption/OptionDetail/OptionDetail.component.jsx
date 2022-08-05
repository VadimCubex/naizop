import React from "react";

import {
  TextVariants,
  ColorSvgVariants,
  IconsVariants,
} from "../../../constants/VariantsOfComponents";
import { TooltipPortal } from "../../Portal";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import { Tooltip } from "../../Tooltip";

import useTooltip from "../../../hooks/useTooltip";

export const OptionWithDetailComponent = ({ selected, value }) => {
  const {
    coords,
    isShowTooltip,
    tooltipSvg,
    TooltipWidth,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  } = useTooltip();

  return (
    <div className="selectOption_variant_detail">
      <div className="content">
        <div className="info">
          <SvgIcon size={20} src={value.icon} />
          <Text className="title" variant={TextVariants.h4}>
            {value.title}
          </Text>
        </div>
        <div>
          <Text variant={TextVariants.h4}>{`$${value.price}`}</Text>
          <Text variant={TextVariants.h4}>{"/" + value.count}</Text>
        </div>
      </div>
      <div
        ref={tooltipSvg}
        onTouchEnd={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="badge"
        style={{ display: value.recommended && !selected ? "flex" : "none" }}
      >
        <Text variant={TextVariants.h5}>Naizop recommended</Text>
        <TooltipPortal>
          <Tooltip
            isLeft={true}
            width={TooltipWidth}
            coords={coords}
            arrowPosition={"left"}
            isShow={isShowTooltip}
            text={
              "24/7 Ticket Support (customers who have spent $100 or more) will automatically unlock 24/7 ticket support. You will know you have achieved this status when the Gold coloured bar has been activated."
            }
          />
        </TooltipPortal>
        <div>
          <SvgIcon
            size={20}
            color={ColorSvgVariants.white}
            src={IconsVariants.Question}
          />
        </div>
      </div>
    </div>
  );
};

OptionWithDetailComponent.displayName = "OptionDetail";
