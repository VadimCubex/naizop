import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { DropDown } from "../../DropDown";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import { Tools } from "../../Tools";
import { NavLinks } from "../constants";

export const MainMenuComponent = () => {
  const [isShowTools, setIsShowTools] = useState(false);
  const [isShowBurger, setIsShowBurger] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const MainMenuClass = classNames("mainMenu");
  const NavBurgerClass = classNames("nav-burger", {
    active: isShowBurger,
  });

  const handleClickLogin = () => {
    navigate("/profile");
  };

  const handleClickBurger = () => {
    setIsShowBurger(!isShowBurger);
  };

  const handleClickBest = () => {
    navigate("/best-quality-service");
    setIsShowBurger(false);
  };

  const handleClickItem = (item) => {
    if (item.text !== "Tools") {
      navigate(item.link);
      setActive(location.pathname);
      setIsShowTools(false);
      setIsShowBurger(false);
    } else {
      setActive("Tools");
      setIsShowTools(!isShowTools);
    }
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <header className={MainMenuClass}>
      <div className="container">
        <nav className="nav-container">
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
          <div className="nav-bar">
            <ul className="nav-list">
              {NavLinks.map((item, index) => (
                <li
                  className={`nav-list-item cursor-pointer ${
                    active === item.link || active === item.text
                      ? "nav-item-active"
                      : ""
                  }`}
                  onClick={() => {
                    handleClickItem(item);
                  }}
                  key={index}
                >
                  <hr className="nav-hr" />
                  {item.text !== "Tools" ? (
                    <Link to={item.link ? item.link : ""}>
                      <Text variant={TextVariants.h3}>{`${item.text} ${
                        active === item.link ? "." : " "
                      }`}</Text>
                    </Link>
                  ) : (
                    <>
                      <Text variant={TextVariants.h3}>{`${item.text} ${
                        active === item.text ? "." : " "
                      }`}</Text>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <div className="nav-button-container">
              <Button
                className={`best-quality-button ${
                  active === "/best-quality-service" ? "active" : ""
                }`}
                variant={ButtonVariants.default}
                text="Best quality services"
                onClick={handleClickBest}
              />
              <div className="auth-buttons">
                <Button
                  variant={ButtonVariants.purchase}
                  onClick={handleClickLogin}
                  text="Login"
                />
                <Button
                  className="register-button"
                  variant={ButtonVariants.default}
                  text="Register"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <DropDown className="default-tools for-tools" isOpen={isShowTools}>
        <div className="tools container nav-container">
          <Tools />
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
              <ul className="nav-list">
                {NavLinks.map((item, index) => (
                  <li
                    className={`nav-list-item cursor-pointer ${
                      (active === item.link || active === item.text) &&
                      "nav-item-active"
                    }`}
                    onClick={() => {
                      handleClickItem(item);
                    }}
                    key={index}
                  >
                    {item.text !== "Tools" ? (
                      <>
                        <hr className="nav-hr" />
                        <Text variant={TextVariants.h3}>{`${item.text} ${
                          active === item.link ? "." : " "
                        }`}</Text>
                      </>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="nav-tools-item">
                          <div style={{ display: "flex" }}>
                            <hr className="nav-hr" />
                            <Text variant={TextVariants.h3}>{`${item.text} ${
                              active === item.text ? "." : " "
                            }`}</Text>
                          </div>
                          <SvgIcon
                            size={12}
                            src={IconsVariants.DropDown_arrow_stroke}
                            rotate={isShowTools ? 180 : 0}
                          />
                        </div>
                        <DropDown className="for-tools" isOpen={isShowTools}>
                          <div className="tools">
                            <Tools />
                          </div>
                        </DropDown>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="nav-button-container">
                <Button
                  className={`best-quality-button ${
                    active === "/best-quality-service" ? "active" : ""
                  }`}
                  variant={ButtonVariants.default}
                  text="Best quality services"
                  onClick={handleClickBest}
                />
                <div className="auth-buttons">
                  <Button
                    onClick={handleClickLogin}
                    variant={ButtonVariants.purchase}
                    text="Login"
                  />
                  <Button
                    className="register-button"
                    variant={ButtonVariants.default}
                    text="Register"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </DropDown>
    </header>
  );
};

MainMenuComponent.displayName = "MainMenu";
