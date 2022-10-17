import React from "react";
import classNames from "classnames";

import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { TooltipPortal } from "../Portal";
import { SvgIcon } from "../SvgIcon";

import useTooltip from "../../hooks/useTooltip";

export const NotificationComponent = ({ children, className }) => {
  const {
    coords,
    isShowTooltip,

    tooltipSvg,
    TooltipWidth,
    handleClick,
  } = useTooltip();
  const NotificationClass = classNames(
    "notification",
    {
      ["notification_show"]: isShowTooltip,
    },
    className
  );

  const EditCoors = () => {
    if (coords.top) {
      return { left: coords.left - TooltipWidth, top: coords.top + 50 };
    }
  };

  return (
    <>
      <div ref={tooltipSvg} onClick={handleClick}>
        <Button
          variant={ButtonVariants.default}
          className={isShowTooltip ? "button_logout active" : "button_logout"}
          size={ButtonSizeVariants.large}
          icon={IconsVariants.Notification}
        />
      </div>
      <TooltipPortal>
        <div
          style={{ ...EditCoors(), width: TooltipWidth }}
          className={NotificationClass}
        >
          <SvgIcon
            className="arrow_right"
            size={40}
            src={IconsVariants.Arrow_tooltip_right}
            style={{ left: TooltipWidth - 39 }}
          />
          {children.map((item, index) => (
            <div className="notification-item" key={index}>
              {index !== 0 && <div className="separator"></div>}
              {item}
            </div>
          ))}
        </div>
      </TooltipPortal>
    </>
  );
};

NotificationComponent.displayName = "Notification";
