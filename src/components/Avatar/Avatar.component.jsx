import React from "react";
import classNames from "classnames";

export const AvatarComponent = React.forwardRef(
  ({ variant, src, className }, ref) => {
    const AvatarClass = classNames(
      "avatar",
      {
        [`avatar_variant_${variant}`]: variant,
      },
      className
    );

    return (
      <div
        ref={ref}
        className={AvatarClass}
        style={src ? { backgroundImage: `url(${src})` } : {}}
      ></div>
    );
  }
);

AvatarComponent.displayName = "Avatar";
