import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import {
  SidebarLinksFirstPart,
  SidebarLinksSecondPart,
} from "../../../constants/constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  NumberVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { DropDown } from "../../DropDown";
import { Number } from "../../Number";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

export const SidebarMenuComponent = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const SidebarMenuClass = classNames("sidebarMenu");
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <aside className={SidebarMenuClass}>
      <div className="sidebar-logo">
        <SvgIcon size={54} src={IconsVariants.Logo} />
        <Text variant={TextVariants.h1_medium}>Naizop</Text>
      </div>
      <hr />
      <div className="sidebar-items">
        {SidebarLinksFirstPart.map((item, index) => (
          <Link
            className={`sidebar-item${active === item.link ? " active" : ""}`}
            key={index}
            to={item.link}
          >
            <div className="item-contant">
              <div>
                <SvgIcon size={16} src={item.icon} />
                <Text variant={TextVariants.h5}>{item.text}</Text>
              </div>
              {item.number && (
                <Number variant={NumberVariants.sm} number={item.number} />
              )}
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
            <Link
              className={`sidebar-item${active === item.link ? " active" : ""}`}
              key={index}
              to={item.link}
            >
              <div className="item-contant">
                <div>
                  <SvgIcon size={16} src={item.icon} />
                  <Text variant={TextVariants.h5}>{item.text}</Text>
                </div>
                {item.number && (
                  <Number variant={NumberVariants.sm} number={item.number} />
                )}
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
