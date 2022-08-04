import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

export const OptionDefaultComponent = ({ value }) => {
  return (
    <div className="selectOption_variant_default">
      {value.icon && (
        <div>
          <SvgIcon src={value.icon} size={20} />
        </div>
      )}
      <Text className="title" variant={TextVariants.h4}>
        {value?.title}
      </Text>
    </div>
  );
};

OptionDefaultComponent.displayName = "OptionDetail";
