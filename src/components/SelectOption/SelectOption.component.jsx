import React from 'react';
import classNames from 'classnames';
import { SelectOptionVariants } from '../../constants/VariantsOfComponents';
import { OptionDetail, OptionWithoutDetail } from '.';

export const SelectOptionComponent = ({
  value,
  onClick,
  selected,
  variant,
  className,
}) => {
  const SelectOptionClass = classNames(
    'selectOption',
    className
  );

  const OptionVariantMap = {
    [SelectOptionVariants.newOrderWithDetail]: <OptionDetail className={!selected && 'selectOption-padding-y-10'} value={value} selected={selected} />,
    [SelectOptionVariants.newOrderWithoutDeteil]: <OptionWithoutDetail className={!selected && 'selectOption-padding-y-10'} value={value} />
  }

  return (
    <div onClick={onClick} className={SelectOptionClass}>
      {!selected && <hr className='separator' />}
      {OptionVariantMap[variant]}
    </div>
  );
};

SelectOptionComponent.displayName = 'SelectOption';