import React, { useState } from "react";
import classNames from "classnames";

import { DropDownVariants } from "../../constants/VariantsOfComponents";
import { DropDown, DropDownOpenButton } from "../DropDown";
import { SelectOption } from "../SelectOption";

export const SelectComponent = ({
  selected,
  onClick,
  additionalOnClick,
  options,
  variant,
  maxHeight,
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
    onClick(value);
    additionalOnClick && additionalOnClick(value.states[0]);
    setIsShowDropDown(!isShowDropDown);
  };

  return (
    <div className="select-container">
      <div className={SelectClass}>
        <div className="select-info">
          <SelectOption value={selected} variant={variant} selected={true} />
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
          (value, index) =>
            selected !== value && (
              <SelectOption
                key={index}
                variant={variant}
                value={value}
                onClick={() => {
                  handleClick(value);
                }}
              />
            )
        )}
      </DropDown>
    </div>
  );
};

SelectComponent.displayName = "Select";
