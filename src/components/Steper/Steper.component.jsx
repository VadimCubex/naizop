import React from "react";
import classNames from "classnames";

import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const SteperComponent = ({ steps, active, className }) => {
  const SteperClass = classNames("steper", className);

  const StepState = (index) => {
    if (index < active) {
      return "done";
    }
    if (index === active) {
      return "active";
    }
    if (index > active) {
      return "next";
    }
  };

  return (
    <div className={SteperClass}>
      {steps.map((item, index) => (
        <div key={index} className={`step ${StepState(index)}`}>
          {index !== 0 && <div className="line"></div>}
          <div className="step-number">
            <div>
              {StepState(index) !== "done" ? (
                <Text variant={TextVariants.h1}>{index + 1}</Text>
              ) : (
                <SvgIcon
                  size={24}
                  src={IconsVariants.Done}
                  color={ColorSvgVariants.black}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

SteperComponent.displayName = "Steper";
