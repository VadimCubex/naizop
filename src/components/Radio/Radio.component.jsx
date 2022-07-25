import React, { useRef } from "react";
import classNames from "classnames";
import { Text } from "../Text";
import { TextVariants } from "../../constants/VariantsOfComponents";

export const RadioComponent = ({
  text,
  name,
  toChecked,
  onChange,
  value,
  className,
}) => {
  const RadioClass = classNames("radio", className);
  const radio = useRef(null);

  const handleClick = () => {
    onChange(radio.current.value);
  };

  return (
    <div className={RadioClass}>
      <input
        id={value}
        ref={radio}
        type="radio"
        onChange={() => {}}
        name={name}
        value={value}
        checked={toChecked === value ? true : false}
      />
      <label htmlFor={value} onClick={handleClick}>
        <span className="dot"></span>
      </label>
      {text && <Text variant={TextVariants.h5}>{text}</Text>}
    </div>
  );
};

RadioComponent.displayName = "Radio";
