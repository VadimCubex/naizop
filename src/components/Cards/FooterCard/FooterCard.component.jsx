import React, { useState } from 'react';
import classNames from 'classnames';
import { Text } from '../../Text';
import { IconsVariants, TextVariants } from '../../../constants/VariantsOfComponents';
import { SvgIcon } from '../../SvgIcon';
import { DropDown } from '../../DropDown';
import { Link } from 'react-router-dom';

export const FooterCardComponent = ({
  item,
  className,
}) => {
  const FooterCardClass = classNames(
    'footer-card',
    className
  );
  const [isShowDropDown, setIsShowDropDown] = useState(false);

  return (
    <div className={FooterCardClass} >
      <div className='title'>
        <Text variant={TextVariants.h2}>{item.title}</Text>
        <SvgIcon onClick={() => { setIsShowDropDown(!isShowDropDown) }}
          src={IconsVariants.DropDown_arrow_stroke}
          size={12}
          rotate={isShowDropDown ? 180 : 0}
        />
      </div>
      <div>
        {
          item.links.map((link, index) =>
            <Link key={index} to={link.link}>
              <Text variant={TextVariants.h3_regular}>{link.text}</Text>
            </Link>
          )
        }
      </div>
      <DropDown isOpen={isShowDropDown}>
        {
          item.links.map((link, index) =>
            <Link key={index} to={link.link}>
              <Text variant={TextVariants.h3_regular}>{link.text}</Text>
            </Link>
          )
        }
      </DropDown>
    </div>
  );
};

FooterCardComponent.displayName = 'AccountCard';