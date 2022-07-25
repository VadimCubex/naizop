import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  IconsVariants,
  NumberVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { DropDown } from "../../DropDown";
import { Number } from "../../Number";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

const ProfileBurgerMenuCategory = ({ name, links, onClick }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="burger-menu-category">
      <div className="category-name">
        <Text variant={TextVariants.h4}>{name}</Text>
        <SvgIcon
          onClick={() => {
            setIsShow(!isShow);
          }}
          src={IconsVariants.DropDown_arrow_stroke}
          size={12}
          rotate={isShow ? 180 : 0}
        />
      </div>
      <DropDown isOpen={isShow} onClick={onClick}>
        <div className="burger-menu-items">
          {links.map((item, index) => (
            <Link className="burger-menu-item" key={index} to={item.link}>
              <div className="item-contant">
                <SvgIcon size={16} src={item.icon} />
                <Text variant={TextVariants.h5}>{item.text}</Text>
              </div>
              {item.number && (
                <Number variant={NumberVariants.sm} number={item.number} />
              )}
            </Link>
          ))}
        </div>
      </DropDown>
    </div>
  );
};

export default ProfileBurgerMenuCategory;
