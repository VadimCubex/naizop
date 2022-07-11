import React from 'react';
import classNames from 'classnames';

export const AvatarComponent = ({
  variant,
  src,
  className,
}) => {
  const AvatarClass = classNames(
    'avatar',
    {
      [`avatar_variant_${variant}`]: variant,
    },
    className
  );

  return (
      <div className={AvatarClass} style={src ? { backgroundImage: `url(${src})` } : {}}>
      </div>
  );
};

AvatarComponent.displayName = 'Avatar';