import React from "react";
import classNames from "classnames";

export const AvatarComponent = React.forwardRef(
  ({ variant, isLight, src, className }, ref) => {
    const AvatarClass = classNames(
      "avatar",
      {
        [`avatar_variant_${variant}`]: variant,
      },
      className
    );

    return (
      <div className="avatar-container">
        {isLight && (
          <div
            className="avatar-light"
            style={src ? { backgroundImage: `url(${src})` } : {}}
          ></div>
        )}
        <div
          ref={ref}
          className={AvatarClass}
          style={src ? { backgroundImage: `url(${src})` } : {}}
        ></div>
      </div>
    );
  }
);

AvatarComponent.displayName = "Avatar";
