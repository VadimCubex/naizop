import React from "react";
import classNames from "classnames";

import InstructionPayeer from "./InstructionVariants/InstructionPayeer";
import { InstructionVariants } from "../../constants/VariantsOfComponents";

export const InstructionComponent = ({ variant }) => {
  const InstructionClass = classNames("instruction");

  const InstructionVariantMap = {
    [InstructionVariants.Payeer]: <InstructionPayeer />,
  };

  return (
    <div className={InstructionClass}>{InstructionVariantMap[variant]}</div>
  );
};

InstructionComponent.displayName = "Instruction";
