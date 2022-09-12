import React from "react";
import classNames from "classnames";

export const TabsComponent = ({
  children,
  variant,
  active,
  onClick,
  className,
}) => {
  const TabsClass = classNames(
    "tabs",
    {
      [`tabs_${variant}`]: variant,
    },
    className
  );

  return (
    <ul className={TabsClass}>
      {children.map((child, index) => (
        <li
          key={index}
          className={`${active === index ? "active" : ""}`}
          onClick={(event) => {
            onClick(event, index);
          }}
        >
          {child}
          {variant === "outline" && <div className="tab-line"></div>}
        </li>
      ))}
    </ul>
  );
};

TabsComponent.displayName = "Tabs";
