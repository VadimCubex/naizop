import React from "react";

import {
  IconsVariants,
  ImagesVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const TrustpilotComponent = () => {
  return (
    <div className="trustpilot-logo">
      <img src={ImagesVariants.Stars} alt="stars" />
      <Text variant={TextVariants.h5_regular}>
        <Text variant={TextVariants.h1}>4.6</Text>/
        <Text variant={TextVariants.h1}>5</Text>
      </Text>
      <div className="info">
        <SvgIcon size={15} src={IconsVariants.Trustpilot} />
        <Text variant={TextVariants.h5_regular}>Trustpilot</Text>
      </div>
    </div>
  );
};

TrustpilotComponent.displayName = "Trustpilot";
