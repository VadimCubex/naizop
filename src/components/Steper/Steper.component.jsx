import React from "react";
import classNames from "classnames";

import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const SteperComponent = ({
  steps,
  active,
  vertical = false,
  className,
}) => {
  const SteperClass = classNames("steper", className);

  const StepState = (index) => {
    switch (vertical) {
      case true:
        if (index < active.index) {
          return "done";
        }
        if (index === active.index) {
          if (active.refunded || active.partial) {
            return "active alert";
          }
          return "active";
        }
        if (index > active.index) {
          if (active.refunded || active.partial) {
            return "next none";
          }
          return "next";
        }
        break;

      case false:
        if (index < active) {
          return "done";
        }
        if (index === active) {
          return "active";
        }
        if (index > active) {
          return "next";
        }
        break;
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
                <Text variant={TextVariants.h1}>
                  {active.refunded || active.partial ? "!" : index + 1}
                </Text>
              ) : (
                <SvgIcon
                  size={24}
                  src={IconsVariants.Done}
                  color={ColorSvgVariants.black}
                />
              )}
              {StepState(index) === "active" && vertical && (
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
