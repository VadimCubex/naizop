import React, { useState } from "react";
import classNames from "classnames";
import { DropDownVariants } from "../../constants/VariantsOfComponents";
import { DropDown, DropDownOpenButton } from "../DropDown";
import { SelectOption } from "../SelectOption";

export const SelectComponent = ({
  selected,
  onClick,
  options,
  variant,
  className,
}) => {
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const SelectClass = classNames("select", className);

  const handleClick = (value) => {
    onClick(value);
    setIsShowDropDown(!isShowDropDown);
  };

  return (
    <div className="select-container">
      <div className={SelectClass}>
        <div className="select-info">
          <SelectOption value={selected} variant={variant} selected={true} />
          <DropDownOpenButton
            isOpen={isShowDropDown}
            onClick={() => {
              setIsShowDropDown(!isShowDropDown);
            }}
          />
        </div>
      </div>
      <DropDown variant={DropDownVariants.select} isOpen={isShowDropDown}>
        {options.map((value, index) => (
          <SelectOption
            key={index}
            variant={variant}
            value={value}
            onClick={() => {
              handleClick(value);
            }}
          />
        ))}
      </DropDown>
    </div>
  );
};

SelectComponent.displayName = "Select";
