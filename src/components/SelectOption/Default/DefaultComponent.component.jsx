import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

export const DefaultComponent = ({ value }) => {
  return (
    <div className="selectOption_variant_default">
      <div>
        {value.icon && (
          <div>
            <SvgIcon src={value.icon} size={20} />
          </div>
        )}
        <Text className="title" variant={TextVariants.h4}>
          {value?.title}
        </Text>
      </div>
      {value.price && <Text variant={TextVariants.h4}>{value.price}$</Text>}
    </div>
  );
};

DefaultComponent.displayName = "Default";
