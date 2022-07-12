import React, { useState } from "react";
import classNames from "classnames";
import { SocialeNetworksInfo } from "../../constants/constants";
import { Number } from "../Number";
import { Text } from "../Text";
import {
  NumberVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { DropDown } from "../DropDown";

export const SocialeNetworksComponent = ({ className }) => {
  const [selected, setSelected] = useState(SocialeNetworksInfo[0]);
  const SocialeNetworksClass = classNames("socialeNetworks", className);

  const handleClick = (item) => {
    setSelected(item);
  };

  // поменять на Social
  return (
    <div className={SocialeNetworksClass}>
      <div>
        {SocialeNetworksInfo.map((item, index) => (
          <div
            className={`sociale-card${item === selected ? " active" : ""}`}
            key={index}
            onClick={() => handleClick(item)}
          >
            {item === selected && (
              <Number
                variant={NumberVariants.lg}
                className="number"
                number={`0${index + 1}`}
              />
            )}
            <div className="for-img">
              <img src={item.img} alt="Social networks" />
            </div>
            <DropDown isOpen={item === selected ? true : false}>
              <Text variant={TextVariants.h2_medium}>{item.description}</Text>
            </DropDown>
            <div className="light" />
            <hr />
          </div>
        ))}
      </div>
      <div className="quality">
        <div>
          <Text variant={TextVariants.h1}>Quality Services</Text>
        </div>
        <div>
          <Text className="description">{selected.description}</Text>
        </div>
      </div>
    </div>
  );
};

SocialeNetworksComponent.displayName = "SocialeNetworks";
