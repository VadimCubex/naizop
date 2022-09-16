import React from "react";
import classNames from "classnames";

export const ProgressBarComponent = ({ percent, className }) => {
  const ProgressBarClass = classNames("progress-bar-container", className);

  return (
    <div className={ProgressBarClass}>
      <div className="progress-bar" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

ProgressBarComponent.displayName = "ProgressBar";
