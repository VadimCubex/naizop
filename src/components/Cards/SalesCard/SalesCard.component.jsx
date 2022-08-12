import React from "react";
import classNames from "classnames";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

export const SalesCardComponent = ({
  onClick,
  item,
  category,
  active,
  className,
}) => {
  const SalesCardClass = classNames(
    "salesCard",
    { active: active === item },
    className
  );

  return (
    <div onClick={onClick} className={SalesCardClass}>
      <div>
        <Text variant={TextVariants.h3}>
          {item.count} {category}
        </Text>
        <Text variant={TextVariants.h5_regular}>Save {item.sale}%</Text>
      </div>
    </div>
  );
};

SalesCardComponent.displayName = "SalesCard";
