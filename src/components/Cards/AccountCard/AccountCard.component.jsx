import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Text } from "../../Text";
import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { SvgIcon } from "../../SvgIcon";
import { Tooltip } from "../../Tooltip";
import { TooltipPortal } from "../../Portal";
import { debounce } from "../../../helpers/helpers";

export const AccountCardComponent = ({ variant, text, tooltip, className }) => {
  const AccountCardClass = classNames(
    "accountCard",
    {
      [`accountCard_variant_${variant}`]: variant,
    },
    className
  );
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [coords, setCoords] = useState({});
  const [tooltipPosition, setTooltipPosition] = useState("left");
  const tooltipSvg = useRef(null);
  let timeout;

  const CalcCoords = () => {
    const rect = tooltipSvg.current.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY,
    });
    DetermineTooltipPosition(rect.x + rect.width / 2 + 340);
  };

  const DetermineTooltipPosition = (right) => {
    if (right > window.innerWidth) {
      setTooltipPosition("right");
    }
  };

  const handleMouseEnter = () => {
    timeout = setTimeout(() => {
      setIsShowTooltip(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearInterval(timeout);
    setIsShowTooltip(false);
  };

  useEffect(() => {
    const updatePosition = () => {
      tooltip && CalcCoords();
    };
    updatePosition();

    window.addEventListener(
      "resize",
      function () {
        debounce(updatePosition(), 750);
      },
      true
    );

    return () => {
      window.removeEventListener(
        "resize",
        function () {
          debounce(updatePosition(), 750);
        },
        true
      );
    };
  }, []);

  return (
    <div className={AccountCardClass}>
      {tooltip && (
        <>
          <TooltipPortal>
            <Tooltip
              coords={coords}
              arrowPosition={tooltipPosition}
              isShow={isShowTooltip}
              text={tooltip}
            />
          </TooltipPortal>
          <div
            ref={tooltipSvg}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="question"
          >
            <SvgIcon
              size={15}
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
