import React from 'react';
import classNames from 'classnames';
import { ToolsInfo } from '../../constants/constants';
import { ToolsCard } from '../Cards';

export const ToolsComponent = ({
  className,
}) => {
  const ToolsClass = classNames(
    className
  );

  return (
    <>
      {
        ToolsInfo.map((item, index) =>
          <ToolsCard key={index} item={item} />
        )
      }
    </>
  );
};

ToolsComponent.displayName = 'Tools';