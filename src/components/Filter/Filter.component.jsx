import React from "react";
import { useState } from "react";
import classNames from "classnames";

import { FilterSelect } from "./constants";
import {
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { DropDown } from "../DropDown";
import { Input } from "../Input";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const FilterComponent = ({ className, withDropdown, options = [] }) => {
  const [value, setValue] = useState("");
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const [activeFilter, setActiveFilter] = useState(
    options[0] || FilterSelect[0]
  );
  const FilterClass = classNames("filter", className);

  const handleClickFilterVariant = (item) => {
    setActiveFilter(item);
    setIsShowDropDown(false);
  };

  return (
    <>
      <div className={FilterClass}>
        <Input
          placeholder={withDropdown ? "Search for services..." : "Search"}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          leftSide={<SvgIcon size={20} src={IconsVariants.Search} />}
          rightSide={
            withDropdown && (
              <div className="filter-dropdown">
                <div className="separator"></div>
                <div>
                  <Text variant={TextVariants.h5}>Service Filter:</Text>
                  <Text variant={TextVariants.h5}>{activeFilter}</Text>
                  <div>
                    <SvgIcon
                      src={IconsVariants.DropDown_arrow_stroke}
                      size={8}
                      rotate={isShowDropDown ? "180" : "0"}
                      onClick={() => {
                        setIsShowDropDown(!isShowDropDown);
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          }
        />
        <Button isLight={true} text="Search" variant={ButtonVariants.blue} />
        <DropDown isOpen={isShowDropDown}>
          {FilterSelect.map(
            (item, index) =>
              activeFilter !== item && (
                <div
                  key={index}
                  onClick={() => {
                    handleClickFilterVariant(item);
                  }}
                >
                  <div className="separator" />
                  <div className="filter-item cursor-pointer">
                    <Text variant={TextVariants.h5}>{item}</Text>
                  </div>
                </div>
              )
          )}
        </DropDown>
      </div>
      {options.length > 0 && (
        <div className="filter-variants-container">
          <div className="filter-variants">
            {options.map((item, index) => (
              <Button
                className={`${activeFilter === item ? "active" : ""}`}
                key={index}
                variant={ButtonVariants.default}
                text={item}
                onClick={() => handleClickFilterVariant(item)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

FilterComponent.displayName = "Filter";
