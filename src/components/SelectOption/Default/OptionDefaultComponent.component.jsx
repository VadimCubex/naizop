import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

export const OptionDefaultComponent = ({ value }) => {
  return (
    <div className="selectOption_variant_default">
      <Text className="title" variant={TextVariants.h4}>
        {value?.title}
      </Text>
    </div>
  );
};

OptionDefaultComponent.displayName = "OptionDetail";
