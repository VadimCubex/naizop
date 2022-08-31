import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  ImagesVariants,
  NumberVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { debounce } from "../../../helpers/helpers";
import { Button } from "../../Button";
import { DropDown } from "../../DropDown";
import { Modal } from "../../Modal";
import { Number } from "../../Number";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import { SidebarLinksFirstPart, SidebarLinksSecondPart } from "../constants";

export const SidebarMenuComponent = () => {
  const SidebarMenuClass = classNames("sidebarMenu");

  const [isShowMore, setIsShowMore] = useState(false);
  const [active, setActive] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const location = useLocation();
  const container = useRef(null);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const changeHeight = () => {
      if (container.current.style)
        container.current.style.height = `${window.innerHeight - 90}px`;
    };
    changeHeight();
    const SidebarChangeHeight = debounce(changeHeight, 500);

    window.addEventListener("resize", SidebarChangeHeight, true);

    return () => {
      window.removeEventListener("resize", SidebarChangeHeight, true);
    };
  }, []);

  return (
    <aside className="sidebar-container">
      <div ref={container} className="sidebar-overflow">
        <div className={SidebarMenuClass}>
          <hr />
          <div className="sidebar-items">
            {SidebarLinksFirstPart.map((item, index) => (
              <Link
                className={`sidebar-item${
                  active === item.link ? " active" : ""
                }`}
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
                  className={`sidebar-item${
                    active === item.link ? " active" : ""
                  }`}
                  key={index}
                  to={item.link}
                >
                  <div className="item-contant">
                    <div>
                      <SvgIcon
                        size={16}
                        src={item.icon}
                        className={
                          item.text === "API" || item.text === "Updates"
                            ? "stroke"
                            : ""
                        }
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
          <div className="crypto">
            <Button
              width="full"
              size={ButtonSizeVariants.large}
              variant={ButtonVariants.crypto}
              isLight={true}
              text="Purchase Crypto"
              iconPosition="right"
              icon={IconsVariants.Arrow_crypto}
              onClick={() => setIsOpenModal(true)}
            />
          </div>
        </div>
      </div>
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
    </aside>
  );
};

SidebarMenuComponent.displayName = "SidebarMenu";
