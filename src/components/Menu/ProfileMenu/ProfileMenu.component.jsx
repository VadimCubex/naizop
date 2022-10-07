import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Ranks } from "../../../constants/constants";
import {
  AvatarVariants,
  ButtonSizeVariants,
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  ImagesVariants,
  NumberVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Avatar } from "../../Avatar";
import { Button } from "../../Button";
import { Currency } from "../../Currency";
import { DropDown } from "../../DropDown";
import { Modal } from "../../Modal";
import { Notification } from "../../Notification";
import { Number } from "../../Number";
import { TooltipPortal } from "../../Portal";
import { ProgressBar } from "../../ProgressBar";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import {
  Notifications,
  Promotions,
  SidebarLinksFirstPart,
  SidebarLinksSecondPart,
} from "../constants";

import { useProfileInfoSelector } from "../../../store/Profile/ProfileInfo/useProfileInfo";
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
  const { img, name, surname, balance, percent, nextRank } =
    useProfileInfoSelector();
  const [isShowBurger, setIsShowBurger] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [isShowPromotions, setIsShowPromotions] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const ProfileMenuClass = classNames("profileMenu");
  const NavBurgerClass = classNames("nav-burger", {
    active: isShowBurger,
  });

  const handleClickProfileItem = (pathname) => {
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
          <div className="nav-svg">
            <div className="nav-logo">
              <SvgIcon size={54} src={IconsVariants.Logo} />
              <Text variant={TextVariants.h1_medium}>Naizop</Text>
            </div>
            <div className="burger-controls">
              <SvgIcon
                className="nav-burger-button"
                size={isShowBurger ? 28 : 44}
                src={isShowBurger ? IconsVariants.Close : IconsVariants.Burger}
                color={ColorSvgVariants.white}
                onClick={handleClickBurger}
              />
            </div>
          </div>

          <div className="menu-items">
            <div className="profile">
              <div className="nav-profile">
                <div className="nav-avatar">
                  <Avatar variant={AvatarVariants.sm} src={img} />
                </div>
                <div className="nav-profile-info">
                  <Text variant={TextVariants.h5}>Welcome,</Text>{" "}
                  <Link to="/profile/account">
                    <Text
                      variant={TextVariants.h5}
                    >{`${name} ${surname}`}</Text>
                  </Link>
                </div>
              </div>
              <div className="nav-balance">
                <Text variant={TextVariants.subtitle_small}>BALANCE</Text>
                <Text variant={TextVariants.h3}>{`$ ${parseFloat(
                  balance
                ).toFixed(2)}`}</Text>
              </div>
            </div>
            <div className="menu-second-part">
              <div className="progress">
                <Text variant={TextVariants.h4}>{percent}%</Text>
                <div className="info">
                  <ProgressBar percent={percent} />
                  <img src={Ranks[nextRank].icon} alt="info rank" />
                </div>
              </div>
              <div className="nav-button-container">
                <Button
                  size={ButtonSizeVariants.large}
                  variant={ButtonVariants.yellow}
                  icon={IconsVariants.Wallet}
                  text="Wallet"
                  isLight={true}
                />
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
                        <Text variant={TextVariants.h5_regular}>
                          {item.text}
                        </Text>
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
            </div>
          </div>
        </nav>
      </div>
      <DropDown className="burger" isInnerHeight={true} isOpen={isShowBurger}>
        <div className={NavBurgerClass}>
          <div className="nav-profile-container">
            <div>
              <div className="nav-profile">
                <div className="nav-avatar">
                  <Avatar variant={AvatarVariants.sm} src={img} />
                </div>
                <div className="nav-profile-info">
                  <Text variant={TextVariants.h5}>Welcome,</Text>
                  <Link to="/profile/account">
                    <Text
                      variant={TextVariants.h5}
                    >{`${name} ${surname}`}</Text>
                  </Link>
                </div>
              </div>
              <div className="buttons">
                <Button
                  className="wallet"
                  size={ButtonSizeVariants.large}
                  variant={ButtonVariants.yellow}
                  icon={IconsVariants.Wallet}
                  isLight={true}
                  text="Wallet"
                />
                <Currency />
                <Button
                  variant={ButtonVariants.default}
                  className="button_logout"
                  size={ButtonSizeVariants.large}
                  icon={IconsVariants.Notification}
                />
              </div>
            </div>
            <div>
              <div className="progress">
                <Text variant={TextVariants.h4}>{percent + "/100"}</Text>
                <ProgressBar percent={percent} />
                <img src={Ranks[nextRank].icon} alt="info rank" />
              </div>
              <div className="nav-balance">
                <Text variant={TextVariants.subtitle_small}>BALANCE</Text>
                <Text variant={TextVariants.h3}>{`$ ${parseFloat(
                  balance
                ).toFixed(2)}`}</Text>
              </div>
            </div>
          </div>
          <div className="nav-burger-container">
            <nav>
              <div className="burger-menu-category">
                <div className="burger-menu-items first">
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
                            <SvgIcon
                              className={
                                item.text === "API" || item.text === "Updates"
                                  ? "stroke"
                                  : ""
                              }
                              size={20}
                              src={item.icon}
                            />
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

              <div className="burger-menu-category">
                <div className="category-name">
                  <Text variant={TextVariants.h4}>Promotions</Text>
                  <SvgIcon
                    onClick={() => {
                      setIsShowPromotions(!isShowPromotions);
                    }}
                    src={IconsVariants.DropDown_arrow_stroke}
                    size={12}
                    rotate={isShowPromotions ? 180 : 0}
                  />
                </div>
                <DropDown isOpen={isShowPromotions}>
                  <div className="burger-menu-items buttons">
                    {Promotions.map((item, index) => (
                      <Button
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        size={ButtonSizeVariants.large}
                        variant={ButtonVariants.side}
                      />
                    ))}
                  </div>
                </DropDown>
              </div>

              <div className="nav-button-container">
                {location.pathname === "/profile/add-funds" && (
                  <div className="crypto">
                    <Button
                      size={ButtonSizeVariants.large}
                      variant={ButtonVariants.crypto}
                      isLight={true}
                      text="Purchase Crypto"
                      iconPosition="right"
                      icon={IconsVariants.Arrow_crypto}
                      onClick={() => setIsOpenModal(true)}
                    />
                  </div>
                )}
                <div>
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
              </div>
            </nav>
          </div>
        </div>
      </DropDown>
      <Modal
        className="purchase-modal"
        title="Purchase Crypto Using Cards"
        isOpen={isOpenModal}
        onClick={() => setIsOpenModal(false)}
      >
        <div className="info">
          <Text variant={TextVariants.h2}>Buy quickly and easily</Text>
          <Text variant={TextVariants.h5_regular}>
            Use your credit card to buy Bitcoin, Bitcoin Cash, Ethereum and
            other select cryptocurrencies. After purchase you can directly
            deposit it onto your Naizop Account.
          </Text>
        </div>
        <div className="methods">
          <div>
            <img src={ImagesVariants.MoonPay} alt="" />
          </div>
          <div>
            <img src={ImagesVariants.Coinbase} alt="" />
          </div>
        </div>
      </Modal>
    </header>
  );
};

ProfileMenuComponent.displayName = "ProfileMenu";
