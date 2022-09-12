import React, { useState } from "react";
import classNames from "classnames";

import { DropDownVariants } from "../../constants/VariantsOfComponents";
import { DropDown, DropDownOpenButton } from "../DropDown";
import { SelectOption } from "../SelectOption";

export const SelectComponent = ({
  value,
  setValue,
  additionalSetValue,
  options,
  variant,
  maxHeight,
  onClick,
  className,
}) => {
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const SelectClass = classNames(
    "select",
    {
      [`variant-${variant}`]: variant,
    },
    className
  );

  const handleClick = (value) => {
    setValue(value);
    onClick && onClick();
    additionalSetValue && additionalSetValue(value.states[0]);
    setIsShowDropDown(!isShowDropDown);
  };

  return (
    <div className="select-container">
      <div className={SelectClass}>
        <div className="select-info">
          <SelectOption value={value} variant={variant} selected={true} />
          <div>
            <DropDownOpenButton
              isOpen={isShowDropDown}
              onClick={() => {
                setIsShowDropDown(!isShowDropDown);
              }}
            />
          </div>
        </div>
      </div>
      <DropDown
        maxHeight={maxHeight}
        variant={DropDownVariants.select}
        isOpen={isShowDropDown}
      >
        {options.map(
          (item, index) =>
            value !== item && (
              <SelectOption
                key={index}
                variant={variant}
                value={item}
                onClick={() => {
                  handleClick(item);
                }}
              />
            )
        )}
      </DropDown>
    </div>
  );
};

SelectComponent.displayName = "Select";
