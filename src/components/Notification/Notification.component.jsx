import React from "react";
import classNames from "classnames";

import { IconsVariants } from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";

export const NotificationComponent = ({
  children,
  isShow,
  arrowPosition = "left",
  coords,
  width,
  className,
}) => {
  const NotificationClass = classNames(
    "notification",
    {
      ["notification_show"]: isShow,
    },
    className
  );

  const ArrowClass = classNames({
    [`arrow_${arrowPosition}`]: arrowPosition,
  });

  const EditCoors = () => {
    if (coords.top) {
      return arrowPosition === "left"
        ? { left: coords.left, top: coords.top + 50 }
        : { left: coords.left - width, top: coords.top + 50 };
    }
  };

  return (
    <div style={{ ...EditCoors(), width: width }} className={NotificationClass}>
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
      {children.map((item, index) => (
        <div className="notification-item" key={index}>
          {index !== 0 && <div className="separator"></div>}
          {item}
        </div>
      ))}
    </div>
  );
};

NotificationComponent.displayName = "Notification";
