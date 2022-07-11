import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { SvgIcon } from '../../SvgIcon';
import { Text } from '../../Text';
import { TextVariants } from '../../../constants/VariantsOfComponents';
import { DropDown } from '../../DropDown';

export const ToolsCardComponent = ({
  item,
  className,
}) => {
  const ToolsCardClass = classNames(
    'tools-card',
    className
  );

  const [isShowDropDown, setIsShowDropDown] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsShowDropDown(!isShowDropDown);
  }

  return (
    <div onClick={(e) => { handleClick(e) }} className={ToolsCardClass}>
      <div className='title'>
        <SvgIcon size={40} src={item.icon} />
        <Text variant={TextVariants.h3}>{item.title}</Text>
      </div>
      <div className='links'>
        <hr className='tools-hr' />
        {
          item.links.map((text, index) =>
            <Link to='' key={index} >
              <p>
                <Text variant={TextVariants.h5_regular}>{text}</Text>
              </p>
            </Link>
          )
        }
      </div>
      <DropDown addToHeight={18} isOpen={isShowDropDown}>
        <div className='links'>
          <hr className='tools-hr' />
          {
            item.links.map((text, index) =>
              <Link to='' key={index} >
                <p>
                  <Text variant={TextVariants.h5_regular}>{text}</Text>
                </p>
              </Link>
            )
          }
        </div>
      </DropDown>
    </div>
  );
};

ToolsCardComponent.displayName = 'ToolsCard';