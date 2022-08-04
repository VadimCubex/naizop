import React from "react";
import { OptionDefault, OptionDetail, OptionWithoutDetail } from ".";
import classNames from "classnames";

import { SelectOptionVariants } from "../../constants/VariantsOfComponents";

export const SelectOptionComponent = ({
  value,
  onClick,
  selected,
  variant,
  className,
}) => {
  const SelectOptionClass = classNames(
    "selectOption",
    "cursor-pointer",
    className
  );

  const OptionVariantMap = {
    [SelectOptionVariants.newOrderWithDetail]: (
      <OptionDetail
        className={!selected && "selectOption-padding-y-10"}
        value={value}
        selected={selected}
      />
    ),
    [SelectOptionVariants.newOrderWithoutDeteil]: (
      <OptionWithoutDetail
        className={!selected && "selectOption-padding-y-10"}
        value={value}
      />
    ),
    [SelectOptionVariants.default]: (
      <OptionDefault
        className={!selected && "selectOption-padding-y-10"}
        value={value}
      />
    ),
  };

  return (
    <div onClick={onClick} className={SelectOptionClass}>
      {!selected && <hr className="separator" />}
      {OptionVariantMap[variant]}
    </div>
  );
};

SelectOptionComponent.displayName = "SelectOption";
