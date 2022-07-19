import React from "react";
import classNames from "classnames";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CircleProgressComponent = ({ value, className }) => {
  const CircleProgressClass = classNames("circleProgress", className);

  return (
    <div style={{ width: `100%` }}>
      <CircularProgressbar
        value={value}
        className={CircleProgressClass}
        styles={{
          root: {},
          path: {
            strokeWidth: "2px",
            stroke: "",
            strokeLinecap: "round",
            transition: "stroke-dashoffset 0.5s ease 0s",
            transformOrigin: "center center",
          },
          trail: {
            stroke: "var(--light-blue-15)",
            strokeWidth: "1px",
          },
          background: {
            fill: "#3e98c7",
          },
        }}
      />
    </div>
  );
};

CircleProgressComponent.displayName = "CircleProgress";
