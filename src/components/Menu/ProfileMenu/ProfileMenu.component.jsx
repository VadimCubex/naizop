import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ProfileBurgerMenuCategory from "./ProfileBurgerMenuCategory";
import { ProfileInfo } from "../../../constants/constants";
import {
  AvatarVariants,
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Avatar } from "../../Avatar";
import { Button } from "../../Button";
import { Currency } from "../../Currency";
import { DropDown } from "../../DropDown";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import {
  ActivityLinks,
  FeaturesLinks,
  ProfileNavLinks,
  ServicesLinks,
} from "../constants";

export const ProfileMenuComponent = () => {
  const [isShowBurger, setIsShowBurger] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);
  const [isShowBurgerProfile, setIsShowBurgerProfile] = useState(false);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [BurgerCategories] = useState([
    {
      name: "Services",
      links: ServicesLinks,
    },
    {
      name: "Activity",
      links: ActivityLinks,
    },
    {
      name: "Features",
      links: FeaturesLinks,
    },
  ]);

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
    setActive(pathname);
  };

  const handleClickProfileBurgerItem = (pathname) => {
    setIsShowBurgerProfile(false);
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
            <Button
              variant={ButtonVariants.default}
              className="button_logout"
              size={ButtonSizeVariants.large}
              icon={IconsVariants.Notification}
            />
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
              {BurgerCategories.map((item, index) => (
                <ProfileBurgerMenuCategory
                  key={index}
                  name={item.name}
                  links={item.links}
                  onClick={handleClickBurger}
                />
              ))}
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
