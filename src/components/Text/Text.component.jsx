import React from 'react';
import classNames from 'classnames';

export const TextComponent = ({
  variant,
  className,
  children
}) => {
  const TextClass = classNames(
    'text',
    {
      [`text_variant_${variant}`]: variant,
    },
    className
  );

  return (
    <span className={TextClass}>{children}</span>
  );
};

TextComponent.displayName = 'Text';