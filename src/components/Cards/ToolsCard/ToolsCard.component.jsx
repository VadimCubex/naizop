import React, { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { DropDown } from "../../DropDown";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

import { useToolsActions } from "../../../store/Tools/useToolsActions";

export const ToolsCardComponent = ({ onClick, item, className }) => {
  const ToolsCardClass = classNames("tools-card", className);
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const { RedirectToTools } = useToolsActions();
  const navigate = useNavigate();

  const handleClickCard = (e) => {
    e.stopPropagation();
    if (window.innerWidth < 835) {
      setIsShowDropDown(!isShowDropDown);
    }
  };

  const handleClickLink = (e, link) => {
    e.stopPropagation();
    onClick && onClick();
    setIsShowDropDown(false);
    RedirectToTools({ tab: link.tab, subTab: link.subTab });
    navigate("/tools");
  };

  return (
    <div
      onClick={(e) => {
        handleClickCard(e);
      }}
      className={ToolsCardClass}
    >
      <div className="title">
        <div>
          <SvgIcon size={40} src={item.icon} />
          <Text variant={TextVariants.h3}>{item.title}</Text>
        </div>
        <SvgIcon
          className="arrow"
          size={12}
          src={IconsVariants.DropDown_arrow_stroke}
          rotate={isShowDropDown ? 180 : 0}
          color={ColorSvgVariants.white}
        />
      </div>
      <div className="links">
        <hr className="tools-hr" />
        {item.links.map((link, index) => (
          <div
            className="cursor-pointer"
            onClick={(e) => handleClickLink(e, link)}
            key={index}
          >
            <p>
              <Text variant={TextVariants.h5_regular}>{link.title}</Text>
            </p>
          </div>
        ))}
      </div>
      <DropDown addToHeight={18} isOpen={isShowDropDown}>
        <div className="links">
          <hr className="tools-hr" />
          {item.links.map((link, index) => (
            <div
              className="cursor-pointer"
              onClick={(e) => handleClickLink(e, link)}
              key={index}
            >
              <p>
                <Text variant={TextVariants.h5_regular}>{link.title}</Text>
              </p>
            </div>
          ))}
        </div>
      </DropDown>
    </div>
  );
};

ToolsCardComponent.displayName = "ToolsCard";
