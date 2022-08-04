import React from "react";

import {
  TextVariants,
  ColorSvgVariants,
  IconsVariants,
} from "../../../constants/VariantsOfComponents";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

export const OptionWithDetailComponent = ({ selected, value }) => {
  return (
    <div className="selectOption_variant_detail">
      <div className="content">
        <div className="info">
          <SvgIcon size={20} src={value.icon} />
          <Text className="title" variant={TextVariants.h4}>
            {value.title}
          </Text>
        </div>
        <div>
          <Text variant={TextVariants.h4}>{`$${value.price}`}</Text>
          <Text variant={TextVariants.h4}>{"/" + value.count}</Text>
        </div>
      </div>
      <div
        className="badge"
        style={{ display: value.recommended && !selected ? "flex" : "none" }}
      >
        <Text variant={TextVariants.h5}>Naizop recommended</Text>
        <SvgIcon
          size={15}
          color={ColorSvgVariants.white}
          src={IconsVariants.Question}
        />
      </div>
    </div>
  );
};

OptionWithDetailComponent.displayName = "OptionDetail";
