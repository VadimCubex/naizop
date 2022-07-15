import React from "react";
import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import classNames from "classnames";
import {
  SidebarLinksFirstPart,
  SidebarLinksSecondPart,
} from "../../../constants/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DropDown } from "../../DropDown";
import { Button } from "../../Button";

export const SidebarMenuComponent = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const SidebarMenuClass = classNames("sidebarMenu");

  return (
    <aside className={SidebarMenuClass}>
      <div className="sidebar-logo">
        <SvgIcon size={54} src={IconsVariants.Logo} />
        <Text variant={TextVariants.h1_medium}>Naizop</Text>
      </div>
      <hr />
      <div className="sidebar-items">
        {SidebarLinksFirstPart.map((item, index) => (
          <Link className="sidebar-item" key={index} to={item.link}>
            <div>
              <SvgIcon size={16} src={item.icon} />
              <Text variant={TextVariants.h5}>{item.text}</Text>
            </div>
          </Link>
        ))}
      </div>
      <div className="more">
        <Text variant={TextVariants.h4}>More</Text>
        <SvgIcon
          onClick={() => {
            setIsShowMore(!isShowMore);
          }}
          src={IconsVariants.DropDown_arrow_stroke}
          size={12}
          rotate={isShowMore ? 180 : 0}
        />
      </div>
      <DropDown isOpen={isShowMore}>
        <div className="sidebar-items">
          {SidebarLinksSecondPart.map((item, index) => (
            <Link className="sidebar-item" key={index} to={item.link}>
              <div>
                <SvgIcon size={16} src={item.icon} />
                <Text variant={TextVariants.h5}>{item.text}</Text>
              </div>
            </Link>
          ))}
        </div>
      </DropDown>
      <div className="crypto">
        <Button
          width="full"
          size={ButtonSizeVariants.large}
          variant={ButtonVariants.crypto}
          isLight={true}
          text="Purchase Crypto"
          iconPosition="right"
          icon={IconsVariants.Arrow_crypto}
        />
      </div>
    </aside>
  );
};

SidebarMenuComponent.displayName = "SidebarMenu";
