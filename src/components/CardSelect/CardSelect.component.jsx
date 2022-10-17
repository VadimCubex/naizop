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
  isPayment = false,
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
            <div>
              <SvgIcon
                src={item.icon}
                color={!isPayment && ColorSvgVariants.white}
                size={isPayment ? 32 : 24}
              />
            </div>
          )}
          <Text variant={isPayment ? TextVariants.h4_regular : TextVariants.h3}>
            {item.title}
          </Text>
        </div>
      ))}
    </div>
  );
};

CardSelectComponent.displayName = "CardSelect";
