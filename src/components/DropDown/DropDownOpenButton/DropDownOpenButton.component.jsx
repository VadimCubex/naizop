import React from 'react';
import classNames from 'classnames';
import { SvgIcon } from '../../SvgIcon';
import { IconsVariants } from '../../../constants/VariantsOfComponents';

export const DropDownOpenButtonComponent = ({
  isOpen,
  onClick,
}) => {
  const DropDownOpenClass = classNames(
    'dropDown-open-button',
    {
      'dropDown-open-button-active': isOpen,
    }
  );

  return (
    <div className={DropDownOpenClass} onClick={onClick}>
      <SvgIcon rotate={isOpen ? '180' : '0'} size={8} src={IconsVariants.DropDown_arrow_fill} />
    </div>
  );
};

DropDownOpenButtonComponent.displayName = 'DropDownOpenButton';