import React from "react";
import { useState } from "react";
import classNames from "classnames";

import { CurrencyInfo } from "../../constants/constants";
import { TextVariants } from "../../constants/VariantsOfComponents";
import { DropDown } from "../DropDown";
import { Text } from "../Text";

export const CurrencyComponent = ({ className }) => {
  const [isShow, setIsShow] = useState(false);
  const [selected, setSelected] = useState(CurrencyInfo[0]);

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

  return (
    <div className={NumberClass}>
      <div
        className="show-currency"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        <Text variant={TextVariants.h4}>{selected.title}</Text>
      </div>
      <div className="select-currency-container">
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
        <div className="selected-currency-for-dropdown">
          <Text variant={TextVariants.h4}>
            {selected.title + " - " + selected.symbol}
          </Text>
        </div>
      </div>
    </div>
  );
};

CurrencyComponent.displayName = "Currency";
