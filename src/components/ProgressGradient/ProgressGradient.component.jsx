import React from "react";
import classNames from "classnames";

export const ProgressGradientComponent = ({ className }) => {
  const ProgressGradientClass = classNames("progressGradient", className);

  return (
    <svg className={ProgressGradientClass}>
      <defs>
        <radialGradient
          id="idCSS"
          fx="-90%"
          fy="50%"
          cx="-70%"
          cy="50%"
          r="213%"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="47%" stopColor="#85F7E2" />
          <stop offset="100%" stopColor="#FFB60E" />
        </radialGradient>
      </defs>
    </svg>
  );
};

ProgressGradientComponent.displayName = "ProgressGradient";
