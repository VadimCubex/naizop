import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { DropDown } from "../../DropDown";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

export const ToolsCardComponent = ({ onClick, item, className }) => {
  const ToolsCardClass = classNames("tools-card", className);

  const [isShowDropDown, setIsShowDropDown] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (window.innerWidth < 835) {
      setIsShowDropDown(!isShowDropDown);
    }
  };

  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      className={ToolsCardClass}
    >
      <div className="title">
        <SvgIcon size={40} src={item.icon} />
        <Text variant={TextVariants.h3}>{item.title}</Text>
      </div>
      <div className="links">
        <hr className="tools-hr" />
        {item.links.map((text, index) => (
          <Link onClick={onClick} to="/tools" key={index}>
            <p>
              <Text variant={TextVariants.h5_regular}>{text}</Text>
            </p>
          </Link>
        ))}
      </div>
      <DropDown addToHeight={18} isOpen={isShowDropDown}>
        <div className="links">
          <hr className="tools-hr" />
          {item.links.map((text, index) => (
            <Link to="" key={index}>
              <p>
                <Text variant={TextVariants.h5_regular}>{text}</Text>
              </p>
            </Link>
          ))}
        </div>
      </DropDown>
    </div>
  );
};

ToolsCardComponent.displayName = "ToolsCard";
