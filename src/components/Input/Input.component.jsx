import React, { forwardRef } from "react";
import classNames from "classnames";

export const InputComponent = forwardRef(
  (
    {
      type,
      value,
      variant,
      placeholder,
      rightSide,
      leftSide,
      hidden,
      multiline = false,
      onChange,
      onClick,
      className,
    },
    ref
  ) => {
    const InputClass = classNames(
      "input",
      {
        ["input_hidden"]: hidden,
        [`input_variant_${variant}`]: variant,
      },
      className
    );

    return (
      <div className={InputClass}>
        {leftSide && <div>{leftSide || null}</div>}
        {!multiline ? (
          <input
            ref={ref}
            value={value}
            type={type ? type : "text"}
            placeholder={placeholder && placeholder}
            onClick={onClick}
            onChange={onChange}
          />
        ) : (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder && placeholder}
          />
        )}
        {rightSide || null}
      </div>
    );
  }
);

InputComponent.displayName = "Input";
