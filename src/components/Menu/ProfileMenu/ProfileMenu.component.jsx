import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ProfileInfo } from "../../../constants/constants";
import {
  AvatarVariants,
  ButtonSizeVariants,
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  NumberVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Avatar } from "../../Avatar";
import { Button } from "../../Button";
import { Currency } from "../../Currency";
import { DropDown } from "../../DropDown";
import { Notification } from "../../Notification";
import { Number } from "../../Number";
import { TooltipPortal } from "../../Portal";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import {
  Notifications,
  ProfileNavLinks,
  SidebarLinksFirstPart,
  SidebarLinksSecondPart,
} from "../constants";

import useTooltip from "../../../hooks/useTooltip";

export const ProfileMenuComponent = () => {
  const {
    coords,
    isShowTooltip,
    tooltipPosition,
    tooltipSvg,
    TooltipWidth,
    handleClick,
  } = useTooltip();
  const [isShowBurger, setIsShowBurger] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);
  const [isShowBurgerProfile, setIsShowBurgerProfile] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const ProfileMenuClass = classNames("profileMenu");
  const NavProfileClass = classNames("nav-profile", {
    active: isShowProfile,
  });
  const NavProfileBurgerClass = classNames("nav-profile", {
    active: isShowBurgerProfile,
  });
  const NavBurgerClass = classNames("nav-burger", {
    active: isShowBurger,
  });

  const handleClickProfileItem = (pathname) => {
    setIsShowProfile(false);
    setIsShowBurger(false);
    setActive(pathname);
  };

  const handleClickProfileBurgerItem = (pathname) => {
    setIsShowBurgerProfile(false);
    setIsShowBurger(false);
    setActive(pathname);
  };

  const handleClickBurger = () => {
    setIsShowBurger(!isShowBurger);
  };

  const handleLogoutClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <header className={ProfileMenuClass}>
      <div className="profile-container">
        <nav className="nav-container">
          <div className="nav-profile-container">
            <div className="nav-svg">
              <div className="nav-logo">
                <SvgIcon size={54} src={IconsVariants.Logo} />
                <Text variant={TextVariants.h1_medium}>Naizop</Text>
              </div>
              <div className="burger-controls">
                {isShowBurger && (
                  <Button
                    variant={ButtonVariants.default}
                    className="button_logout"
                    size={ButtonSizeVariants.large}
                    icon={IconsVariants.Notification}
                  />
                )}
                <SvgIcon
                  className="nav-burger-button"
                  size={isShowBurger ? 28 : 44}
                  src={
                    isShowBurger ? IconsVariants.Close : IconsVariants.Burger
                  }
                  onClick={handleClickBurger}
                />
              </div>
            </div>
            <div className={NavProfileClass}>
              <div className="nav-avatar">
                <Avatar variant={AvatarVariants.sm} src={ProfileInfo.img} />
              </div>
              <div className="nav-profile-info">
                <Text variant={TextVariants.h5}>Welcome,</Text>
                <div>
                  <Text
                    variant={TextVariants.h5}
                  >{`${ProfileInfo.name} ${ProfileInfo.surname}`}</Text>
                  <SvgIcon
                    onClick={() => {
                      setIsShowProfile(!isShowProfile);
                    }}
                    src={IconsVariants.DropDown_arrow_stroke}
                    size={12}
                    rotate={isShowProfile ? 180 : 0}
                  />
                </div>
              </div>
            </div>
            <div className="nav-balance">
              <Text variant={TextVariants.subtitle_small}>BALANCE</Text>
              <Text variant={TextVariants.h3}>{`$ ${parseFloat(
                ProfileInfo.balance
              ).toFixed(2)}`}</Text>
            </div>
          </div>

          <div className="nav-button-container">
            <Currency />
            <TooltipPortal>
              <Notification
                width={TooltipWidth}
                coords={coords}
                arrowPosition={tooltipPosition}
                isShow={isShowTooltip}
              >
                {Notifications.map((item, index) => (
                  <div className="type" key={index}>
                    <SvgIcon
                      src={item.icon}
                      size={24}
                      color={ColorSvgVariants.white}
                    />
                    <Text variant={TextVariants.h5_regular}>{item.text}</Text>
                  </div>
                ))}
              </Notification>
            </TooltipPortal>
            <div ref={tooltipSvg} onClick={handleClick}>
              <Button
                variant={ButtonVariants.default}
                className={
                  isShowTooltip ? "button_logout active" : "button_logout"
                }
                size={ButtonSizeVariants.large}
                icon={IconsVariants.Notification}
              />
            </div>
            <Button
              onClick={handleLogoutClick}
              variant={ButtonVariants.default}
              className="button_logout"
              size={ButtonSizeVariants.large}
              text="Logout"
              icon={IconsVariants.Logout}
              iconPosition="right"
            />
          </div>
        </nav>
      </div>

      <DropDown className="profile-links" isOpen={isShowProfile}>
        <div className="links">
          {ProfileNavLinks.map((item, index) => (
            <Link
              onClick={() => handleClickProfileItem(item.link)}
              className={`links-item${active === item.link ? " active" : ""}`}
              key={index}
              to={item.link}
            >
              <div>
                <SvgIcon size={20} src={item.icon} />
                <Text variant={TextVariants.h5}>{item.text}</Text>
              </div>
            </Link>
          ))}
        </div>
      </DropDown>
      <DropDown className="burger" isInnerHeight={true} isOpen={isShowBurger}>
        <div className={NavBurgerClass}>
          <div className="nav-profile-container">
            <div className={NavProfileBurgerClass}>
              <div className="nav-avatar">
                <Avatar variant={AvatarVariants.sm} src={ProfileInfo.img} />
              </div>
              <div className="nav-profile-info">
                <Text variant={TextVariants.h5}>Welcome,</Text>
                <div>
                  <Text
                    variant={TextVariants.h5}
                  >{`${ProfileInfo.name} ${ProfileInfo.surname}`}</Text>
                  <SvgIcon
                    onClick={() => {
                      setIsShowBurgerProfile(!isShowBurgerProfile);
                    }}
                    src={IconsVariants.DropDown_arrow_stroke}
                    size={12}
                    rotate={isShowBurgerProfile ? 180 : 0}
                  />
                </div>
              </div>
            </div>
            <div className="nav-balance">
              <Text variant={TextVariants.subtitle_small}>BALANCE</Text>
              <Text variant={TextVariants.h3}>{`$ ${parseFloat(
                ProfileInfo.balance
              ).toFixed(2)}`}</Text>
            </div>
          </div>
          <DropDown className="profile-links" isOpen={isShowBurgerProfile}>
            <div className="links">
              {ProfileNavLinks.map((item, index) => (
                <Link
                  onClick={() => handleClickProfileBurgerItem(item.link)}
                  className={`links-item${
                    active === item.link ? " active" : ""
                  }`}
                  key={index}
                  to={item.link}
                >
                  <div>
                    <SvgIcon size={20} src={item.icon} />
                    <Text variant={TextVariants.h5}>{item.text}</Text>
                  </div>
                </Link>
              ))}
            </div>
          </DropDown>
          <div className="container nav-burger-container">
            <nav>
              <div className="burger-menu-category">
                <div className="burger-menu-items">
                  {SidebarLinksFirstPart.map((item, index) => (
                    <Link
                      className={`burger-menu-item${
                        active === item.link ? " active" : ""
                      }`}
                      key={index}
                      to={item.link}
                    >
                      <div
                        className="item-contant"
                        onClick={() => handleClickProfileItem(item.link)}
                      >
                        <div>
                          <SvgIcon size={20} src={item.icon} />
                          <Text variant={TextVariants.h5}>{item.text}</Text>
                        </div>
                        {item.number && (
                          <Number
                            variant={NumberVariants.sm}
                            number={item.number}
                          />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="burger-menu-category">
                <div className="category-name">
                  <Text variant={TextVariants.h4}>More</Text>
                  <SvgIcon
                    onClick={() => {
                      setIsShow(!isShow);
                    }}
                    src={IconsVariants.DropDown_arrow_stroke}
                    size={12}
                    rotate={isShow ? 180 : 0}
                  />
                </div>
                <DropDown isOpen={isShow}>
                  <div className="burger-menu-items">
                    {SidebarLinksSecondPart.map((item, index) => (
                      <Link
                        className={`burger-menu-item${
                          active === item.link ? " active" : ""
                        }`}
                        key={index}
                        to={item.link}
                      >
                        <div
                          className="item-contant"
                          onClick={() => handleClickProfileItem(item.link)}
                        >
                          <div>
                            <SvgIcon size={20} src={item.icon} />
                            <Text variant={TextVariants.h5}>{item.text}</Text>
                          </div>
                          {item.number && (
                            <Number
                              variant={NumberVariants.sm}
                              number={item.number}
                            />
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </DropDown>
              </div>

              <div className="nav-button-container">
                <div style={{ width: "fit-content" }}>
                  <Button
                    size={ButtonSizeVariants.large}
                    variant={ButtonVariants.crypto}
                    isLight={true}
                    text="Purchase Crypto"
                    iconPosition="right"
                    icon={IconsVariants.Arrow_crypto}
                  />
                </div>
                <Button
                  onClick={handleLogoutClick}
                  variant={ButtonVariants.default}
                  className="button_logout"
                  size={ButtonSizeVariants.large}
                  text="Logout"
                  icon={IconsVariants.Logout}
                  iconPosition="right"
                />
              </div>
            </nav>
          </div>
        </div>
      </DropDown>
    </header>
  );
};

ProfileMenuComponent.displayName = "ProfileMenu";
