import React from "react";
import classNames from "classnames";

import {
  ButtonSizeVariants,
  ButtonVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { Text } from "../Text";

export const HowItWorksComponent = () => {
  const HowItWorksClass = classNames("howItWorks");

  return (
    <div className={HowItWorksClass}>
      <Text variant={TextVariants.h4}>
        How it works?
        <br /> {"Let's"} watch the video!
      </Text>
      <Button
        variant={ButtonVariants.yellow}
        size={ButtonSizeVariants.large}
        isLight={true}
        text="Watch the video"
      />
    </div>
  );
};

HowItWorksComponent.displayName = "HowItWorks";
