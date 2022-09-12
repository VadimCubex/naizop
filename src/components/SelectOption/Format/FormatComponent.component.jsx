import React from "react";

import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

export const FormatComponent = ({ value, selected }) => {
  return (
    <div className="selectOption_variant_format">
      <div>
        <Text
          className="title"
          variant={selected ? TextVariants.h4 : TextVariants.h4_regular}
        >
          {value.title}
        </Text>
      </div>
      <div>
        {!value.sound && (
          <div>
            <SvgIcon
              src={IconsVariants.SoundOff}
              size={24}
              color={ColorSvgVariants.gray_text}
            />
          </div>
        )}
        <div className="pixel">
          <Text variant={TextVariants.h5}>{value.pixel}</Text>
        </div>
      </div>
    </div>
  );
};

FormatComponent.displayName = "Format";
