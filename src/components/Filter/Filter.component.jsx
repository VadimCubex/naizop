import React from "react";
import { useState } from "react";
import classNames from "classnames";

import {
  ButtonVariants,
  IconsVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { Input } from "../Input";
import { SvgIcon } from "../SvgIcon";

export const FilterComponent = ({ className, withDropdown, options }) => {
  const [value, setValue] = useState("");
  const [activeFilter, setActiveFilter] = useState(options[0]);
  const FilterClass = classNames("filter", className);

  const handleClickFilterVariant = (item) => {
    setActiveFilter(item);
  };

  return (
    <>
      <div className={FilterClass}>
        <Input
          placeholder="Search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          leftSide={<SvgIcon size={20} src={IconsVariants.Search} />}
          rightSide={withDropdown && <></>}
        />
        <Button isLight={true} text="Search" variant={ButtonVariants.blue} />
      </div>
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
    </>
  );
};

FilterComponent.displayName = "Filter";
