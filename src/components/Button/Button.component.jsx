import React from "react";
import classNames from "classnames";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";
import {
  ButtonSizeVariants,
  ButtonVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

export const ButtonComponent = ({
  text,
  id,
  variant,
  isLight,
  size = "md",
  width = "content",
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  disabled,
  style,
  className,
}) => {
  const buttonClass = classNames(
    "button",
    {
      [`button_variant_${variant}`]: variant,
      [`button_size_${size}`]: size,
      [`button_width_${width}`]: width,
      [`button_icon_position_${iconPosition}`]: iconPosition,
      disabled: disabled,
    },
    className
  );

  const TextVariantMap = {
    [ButtonSizeVariants.extra_large]: TextVariants.h1,
    [ButtonSizeVariants.large]: TextVariants.h4,
    [ButtonSizeVariants.medium]: TextVariants.h4,
    [ButtonSizeVariants.small]: TextVariants.h5,
  };

  return (
    <div style={{ position: "relative" }}>
      {isLight && <div className={buttonClass + " light"}></div>}
      <button
        className={buttonClass}
        disabled={disabled}
        onClick={disabled ? () => null : onClick}
        style={style}
        type={type}
        id={id}
      >
        <div>
          {icon && (
            <SvgIcon
              src={icon}
              size={variant === ButtonVariants.crypto ? 34 : 24}
            />
          )}
          {text && <Text variant={TextVariantMap[size]}>{text}</Text>}
        </div>
      </button>
    </div>
  );
};

ButtonComponent.displayName = "Button";
