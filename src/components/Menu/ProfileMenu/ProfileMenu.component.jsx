import React, { useState } from "react";
import {
  AvatarVariants,
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import classNames from "classnames";
import { DropDown } from "../../DropDown";
import { Avatar } from "../../Avatar";
import { ProfileInfo, ProfileNavLinks } from "../../../constants/constants";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const ProfileMenuComponent = () => {
  const [isShowBurger, setIsShowBurger] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);
  const [active, setActive] = useState("");

  const ProfileMenuClass = classNames("profileMenu");
  const NavProfileClass = classNames("nav-profile", {
    active: isShowProfile,
  });
  const NavBurgerClass = classNames("nav-burger", {
    active: isShowBurger,
  });

  const handleClickItem = (pathname) => {
    setActive(pathname);
  };

  const handleClickBurger = () => {
    setIsShowBurger(!isShowBurger);
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
              <SvgIcon
                className="nav-burger-button"
                size={isShowBurger ? 28 : 44}
                src={isShowBurger ? IconsVariants.Close : IconsVariants.Burger}
                onClick={handleClickBurger}
              />
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
              <Text variant={TextVariants.subtitle_small}>Balance</Text>
              <Text variant={TextVariants.h3}>{`$ ${parseFloat(
                ProfileInfo.balance
              )}`}</Text>
            </div>
          </div>

          <div className="nav-button-container">
            <Button
              size={ButtonSizeVariants.large}
              variant={ButtonVariants.default}
              text="USD"
            />
            <Button
              variant={ButtonVariants.default}
              className="button_logout"
              size={ButtonSizeVariants.large}
              icon={IconsVariants.Notification}
            />
            <Button
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
              onClick={() => handleClickItem(item.link)}
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
        <div
          onScroll={(e) => {
            e.stopPropagation();
          }}
          className={NavBurgerClass}
        >
          <div className="container nav-burger-container">
            <nav>
              <div className="nav-button-container">
                <Button
                  size={ButtonSizeVariants.large}
                  variant={ButtonVariants.default}
                  text="USD"
                />
                <Button
                  variant={ButtonVariants.default}
                  className="button_logout"
                  size={ButtonSizeVariants.large}
                  icon={IconsVariants.Notification}
                />
                <Button
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
