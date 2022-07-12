import React from "react";
import classNames from "classnames";
import { ReactSVG } from "react-svg";
import "./SvgIcon.module.css";

export const SvgIconComponent = ({
  src,
  size = 24,
  color = "inherit",
  rotate,
  className,
  style,
  onClick,
  onMouseMove,
  defaultStroke,
}) => {
  const svgIconClass = classNames(
    "svgIcon",
    {
      [`svgIcon_rotate_${rotate}`]: rotate,
      ["defaultStroke"]: defaultStroke,
    },
    className
  );

  const stroke = defaultStroke ? {} : { stroke: `var(--${color})` };

  const customStyles = {
    width: `${size}px`,
    height: `${size}px`,
    ...style,
    ...stroke,
  };

  return (
    <ReactSVG
      src={src}
      className={svgIconClass}
      onClick={onClick}
      onMouseMove={onMouseMove}
      style={customStyles}
    />
  );
};

SvgIconComponent.displayName = "SvgIcon";
