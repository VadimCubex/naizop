import React, { forwardRef, useState } from "react";
import classNames from "classnames";

export const InputComponent = forwardRef(
  (
    {
      value,
      variant,
      placeholder,
      disabled,
      rightSide,
      children,
      hidden,
      multiline = false,
      onChange,
      onClick,
      onBlur,
      onFocus,
      className,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const InputClass = classNames(
      "input",
      {
        ["input_focused"]: isFocused,
        ["input_hidden"]: hidden,
        [`input_variant_${variant}`]: variant,
      },
      className
    );

    const handleFocus = (e) => {
      if (disabled) return;
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e) => {
      if (disabled) return;
      onBlur?.(e);
      if (value) return;
      setIsFocused(false);
    };

    return (
      <div className={InputClass}>
        {children}
        <input
          ref={ref}
          value={value}
          type="text"
          placeholder={placeholder && placeholder}
          aria-multiline={multiline}
          onClick={onClick}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></input>
        {rightSide || null}
      </div>
    );
  }
);

InputComponent.displayName = "Input";
