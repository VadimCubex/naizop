import React from 'react';
import classNames from 'classnames';
import { SvgIcon } from '../../SvgIcon';
import { Text } from '../../Text';
import { ColorSvgVariants, TextVariants } from '../../../constants/VariantsOfComponents';

export const AdvantagesCardComponent = ({
  item,
  className,
}) => {
  const AdvantagesCardClass = classNames(
    'advantages-card',
    className
  );

  return (
    <div className={AdvantagesCardClass}>
      <div className='lines'>
        <div>
          <div className='title'>
            <SvgIcon size={30} src={item.icon} colorFill={ColorSvgVariants.white} />
            <Text variant={TextVariants.h3}>{item.title}</Text>
          </div>
          <div className='description'>
            <hr />
            <Text variant={TextVariants.h3_regular}>{item.description}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

AdvantagesCardComponent.displayName = 'AdvantagesCard';