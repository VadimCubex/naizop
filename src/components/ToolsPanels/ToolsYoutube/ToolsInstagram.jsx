import React from "react";
import classNames from "classnames";

import {
  ColorSvgVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const PlanComponent = ({ plan, className }) => {
  const PlanClass = classNames("plan", className);

  return (
    <div className={PlanClass}>
      <div>
        <SvgIcon
          src={plan.icon_stroke}
          size={20}
          color={ColorSvgVariants.white}
        />
        <Text variant={TextVariants.h4}>{plan.title}</Text>
      </div>
      <Text variant={TextVariants.h4}>{plan.price}$</Text>
    </div>
  );
};

PlanComponent.displayName = "Plan";
