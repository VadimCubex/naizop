import React from 'react';
import classNames from 'classnames';
import { CircleProgress } from '../CircleProgress';
import { Avatar } from '../Avatar';
import { AvatarVariants, TextVariants } from '../../constants/VariantsOfComponents';
import { Text } from '../Text';

export const AvatarDashboardComponent = ({
  progress,
  src,
  className,
}) => {
  const AvatarDashboardClass = classNames(
    'avatarDashboard',
    className
  );

  return (
    <div className={AvatarDashboardClass}>
      <div>
        <CircleProgress size={202} value={progress} />
        <Avatar src={src} variant={AvatarVariants.lg} />
        <div className='avatar_shadow'>
          <Text variant={TextVariants.h3}>NEW</Text>
        </div>
      </div>
      <Text variant={TextVariants.h5_regular}>{`$${progress}/100`}</Text>
    </div>
  );
};

AvatarDashboardComponent.displayName = 'Avatar';