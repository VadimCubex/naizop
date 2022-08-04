import React from "react";
import classNames from "classnames";

export const TabsComponent = ({ children, active, onClick, className }) => {
  const TabsClass = classNames("tabs", className);

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
        </li>
      ))}
    </ul>
  );
};

TabsComponent.displayName = "Tabs";
