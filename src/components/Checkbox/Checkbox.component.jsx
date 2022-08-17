import React from "react";
import classNames from "classnames";

import { TextVariants } from "../../constants/VariantsOfComponents";
import { Text } from "../Text";

export const CheckboxComponent = ({ text, onChange, value, className }) => {
  const CheckboxClass = classNames("checkbox", className);

  return (
    <div className={CheckboxClass}>
      <input type="checkbox" onChange={() => {}} checked={value} />
      <label onClick={onChange}>
        <div>
          <span className="border">
            <span className="dot"></span>
          </span>
        </div>
        {text && <Text variant={TextVariants.h5_regular}>{text}</Text>}
      </label>
    </div>
  );
};

CheckboxComponent.displayName = "Checkbox";
