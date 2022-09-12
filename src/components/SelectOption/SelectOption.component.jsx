import React from "react";
import { Default, Detail, OptionsFormat, WithoutDetail } from ".";
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
    [SelectOptionVariants.Detail]: (
      <Detail
        className={!selected && "selectOption-padding-y-10"}
        value={value}
        selected={selected}
      />
    ),
    [SelectOptionVariants.WithoutDeteil]: (
      <WithoutDetail
        className={!selected && "selectOption-padding-y-10"}
        value={value}
      />
    ),
    [SelectOptionVariants.Default]: (
      <Default
        className={!selected && "selectOption-padding-y-10"}
        value={value}
      />
    ),
    [SelectOptionVariants.Format]: (
      <OptionsFormat
        className={!selected && "selectOption-padding-y-10"}
        value={value}
        selected={selected}
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
