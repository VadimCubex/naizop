import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import classNames from "classnames";

import { CurrencyInfo } from "./constants";
import { TextVariants } from "../../constants/VariantsOfComponents";
import { DropDown } from "../DropDown";
import { CurrencyPortal } from "../Portal";
import { Text } from "../Text";

export const CurrencyComponent = ({ className }) => {
  const [isShow, setIsShow] = useState(false);
  const [selected, setSelected] = useState(CurrencyInfo[0]);
  const [coords, setCoords] = useState(0);
  const currency = useRef(null);
  const dropDown = useRef(null);

  const NumberClass = classNames(
    "currency",
    "cursor-pointer",
    {
      active: isShow,
    },
    className
  );

  const handleClickItem = (item) => {
    setSelected(item);
    setIsShow(false);
  };

  useLayoutEffect(() => {
    dropDown.current.style.right = `${
      window.innerWidth -
      (currency.current.offsetLeft + currency.current.offsetWidth)
    }px`;
    console.log(coords);
  }, [window.innerWidth]);

  useEffect(() => {
    setCoords(currency.current.getBoundingClientRect());
  }, []);

  return (
    <div ref={currency} className={NumberClass}>
      <div
        className="show-currency"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        <Text variant={TextVariants.h4}>{selected.title}</Text>
      </div>
      <CurrencyPortal>
        <div
          ref={dropDown}
          className={classNames("select-currency-container", {
            active: isShow,
          })}
        >
          <div className="selected-currency-for-dropdown">
            <Text variant={TextVariants.h4}>
              {selected.title + " - " + selected.symbol}
            </Text>
          </div>
          <DropDown isOpen={isShow}>
            {CurrencyInfo.map(
              (item, index) =>
                selected !== item && (
                  <div
                    key={index}
                    onClick={() => {
                      handleClickItem(item);
                    }}
                  >
                    <div className="separator" />
                    <div className="select-currency-item">
                      <Text variant={TextVariants.h4}>
                        {item.title + " - " + item.symbol}
                      </Text>
                    </div>
                  </div>
                )
            )}
          </DropDown>
        </div>
      </CurrencyPortal>
    </div>
  );
};

CurrencyComponent.displayName = "Currency";
