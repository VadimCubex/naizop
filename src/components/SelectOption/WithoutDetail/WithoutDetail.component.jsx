import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

export const WithoutDetailComponent = ({ value }) => {
  return (
    <div className={"selectOption_variant_nodetail"}>
      <div className="info">
        <SvgIcon size={20} src={value.icon} />
        <Text variant={TextVariants.h4}>{value.title}</Text>
      </div>
      <div className="badge">
        <Text variant={TextVariants.h5}>{value.badge}</Text>
      </div>
    </div>
  );
};

WithoutDetailComponent.displayName = "WithoutDetail";
