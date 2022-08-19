import React, { useState } from "react";
import classNames from "classnames";

import {
  DropDownVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { DropDown, DropDownOpenButton } from "../DropDown";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const AccordionComponent = ({
  icon,
  title,
  children,
  badges,
  className,
}) => {
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const AccordionClass = classNames("accordion", className);

  return (
    <div className="accordion-container">
      <div className={AccordionClass}>
        <div className="accordion-info">
          <div className="accordion-title">
            <div className="accordion-title-contant">
              <SvgIcon src={icon} size={24} />
              <Text variant={TextVariants.h4}>{title}</Text>
            </div>
            {badges && (
              <div className="accordion-badges">
                {badges.map((item, index) => (
                  <div key={index} className="badge">
                    <Text variant={TextVariants.h5}>{item}</Text>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="accordion-button-container">
            <DropDownOpenButton
              isOpen={isShowDropDown}
              onClick={() => {
                setIsShowDropDown(!isShowDropDown);
              }}
            />
          </div>
        </div>
      </div>
      <DropDown variant={DropDownVariants.accordion} isOpen={isShowDropDown}>
        {children}
      </DropDown>
    </div>
  );
};

AccordionComponent.displayName = "Accordion";
