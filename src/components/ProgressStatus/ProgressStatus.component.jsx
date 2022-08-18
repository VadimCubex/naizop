import React from "react";
import classNames from "classnames";

import { StatusSteper } from "../StatusSteper";
import { Steper } from "../Steper";

export const ProgressStatusComponent = ({ status, className }) => {
  const ProgressStatusClass = classNames("progress-status", className);

  return (
    <div className={ProgressStatusClass}>
      <Steper
        vertical={true}
        className="for-progress"
        active={status}
        steps={[...Array(4)]}
      />
      <StatusSteper active={status} />
    </div>
  );
};

ProgressStatusComponent.displayName = "ProgressStatus";
