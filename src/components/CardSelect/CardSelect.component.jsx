import React from "react";
import classNames from "classnames";

import {
  ColorSvgVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const CardSelectComponent = ({
  title,
  onClick,
  value,
  options,
  className,
}) => {
  const CardSelectClass = classNames("card-select", className);

  return (
    <div className={CardSelectClass}>
      {title && <Text variant={TextVariants.h3}>{title}</Text>}
      {options.map((item) => (
        <div
          key={item.title}
          onClick={() => onClick(item)}
          className={classNames("card-select-item", "cursor-pointer", {
            active: value === item,
          })}
        >
          {item.icon && (
            <SvgIcon src={item.icon} color={ColorSvgVariants.white} />
          )}
          <Text variant={TextVariants.h3}>{item.title}</Text>
        </div>
      ))}
    </div>
  );
};

CardSelectComponent.displayName = "CardSelect";
