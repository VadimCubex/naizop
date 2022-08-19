import React from "react";
import classNames from "classnames";

import InstructionPayeer from "./InstructionVariants/InstructionPayeer";
import {
  IconsVariants,
  InstructionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const InstructionComponent = ({ variant }) => {
  const InstructionClass = classNames("instruction");

  const InstructionVariantMap = {
    [InstructionVariants.Payeer]: <InstructionPayeer />,
  };

  return (
    <div className={InstructionClass}>
      <div>
        <SvgIcon src={IconsVariants.Info_Circle} size={24} />
      </div>
      <div>
        <Text variant={TextVariants.h3}>Instruction:</Text>
        {InstructionVariantMap[variant]}
      </div>
    </div>
  );
};

InstructionComponent.displayName = "Instruction";
