import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";

import {
  LinkHistory,
  NewOrderCategory,
  NewOrderService,
} from "../../pages/PlaceNewOrder/constants";
import {
  ColorSvgVariants,
  IconsVariants,
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { debounce } from "../../helpers/helpers";
import { DropDown } from "../DropDown";
import { Filter } from "../Filter";
import { Input } from "../Input";
import { Select } from "../Select";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const NewOrderComponent = ({ className }) => {
  const NewOrderClass = classNames("newOrder", className);

  const [firstSelectHeight, setFirstSelectHeight] = useState(0);
  const [SecondSelectHeight, setSecondSelectHeight] = useState(0);
  const [isShowLinkDropDown, setIsShowLinkDropDown] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(NewOrderCategory[0]);
  const [selectedService, setSelectedService] = useState(NewOrderService[0]);

  const [description, setDescription] = useState("");
  const [postLink, setPostLink] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const FirstSelectHeight = () => {
      if (window.innerWidth >= 1440) setFirstSelectHeight(360);
      if (window.innerWidth < 1440 && window.innerWidth >= 1025)
        setFirstSelectHeight(430);
      if (window.innerWidth < 1025 && window.innerWidth >= 835)
        setFirstSelectHeight(500);
      if (window.innerWidth < 835 && window.innerWidth >= 426)
        setFirstSelectHeight(565);
      if (window.innerWidth < 426) setFirstSelectHeight(630);
    };

    const SecondSelectHeight = () => {
      if (window.innerWidth >= 1440) setSecondSelectHeight(350);
      if (window.innerWidth < 1440 && window.innerWidth >= 1025)
        setSecondSelectHeight(420);
      if (window.innerWidth < 1025 && window.innerWidth >= 835)
        setSecondSelectHeight(490);
      if (window.innerWidth < 835 && window.innerWidth >= 426)
        setSecondSelectHeight(555);
      if (window.innerWidth < 426) setSecondSelectHeight(620);
    };

    FirstSelectHeight();
    SecondSelectHeight();

    const UpdateFirstSelectHeight = debounce(FirstSelectHeight, 500);
    const UpdateSecondSelectHeight = debounce(SecondSelectHeight, 500);

    window.addEventListener("resize", UpdateFirstSelectHeight, true);
    window.addEventListener("resize", UpdateSecondSelectHeight, true);

    return () => {
      window.removeEventListener("resize", UpdateFirstSelectHeight, true);
      window.removeEventListener("resize", UpdateSecondSelectHeight, true);
    };
  }, []);

  return (
    <div className={NewOrderClass}>
      <Filter withSelect={true} />
      <div className="chunk category">
        <Text variant={TextVariants.h3}>Category</Text>
        <Select
          maxHeight={firstSelectHeight}
          options={NewOrderCategory}
          selected={selectedCategory}
          onClick={setSelectedCategory}
          variant={SelectOptionVariants.newOrderWithoutDeteil}
        />
      </div>
      <div className="chunk service">
        <Text variant={TextVariants.h3}>Service</Text>
        <Select
          maxHeight={SecondSelectHeight}
          options={NewOrderService}
          selected={selectedService}
          onClick={setSelectedService}
          variant={SelectOptionVariants.newOrderWithDetail}
        />
      </div>
      <div className="chunk">
        <Text variant={TextVariants.h3}>Description</Text>
        <Input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          multiline={true}
        />
      </div>
      <div className="chunk link">
        <Text variant={TextVariants.h3}>Post Link</Text>
        <div className="link-dropdown">
          <Input
            value={postLink}
            onChange={(e) => setPostLink(e.target.value)}
            placeholder="Enter the link of your post..."
            rightSide={
              <div>
                <SvgIcon
                  onClick={() => {
                    setIsShowLinkDropDown(!isShowLinkDropDown);
                  }}
                  src={IconsVariants.History}
                  color={
                    isShowLinkDropDown
                      ? ColorSvgVariants.yellow
                      : ColorSvgVariants.white
                  }
                />
              </div>
            }
          />
          <DropDown isOpen={isShowLinkDropDown}>
            {LinkHistory.map((item, index) => (
              <div onClick={() => setIsShowLinkDropDown(false)} key={index}>
                <hr />
                <div className="link-item">
                  <Text variant={TextVariants.h4_regular}>{item}</Text>
                </div>
              </div>
            ))}
          </DropDown>
        </div>
      </div>
      <div className="chunk">
        <Text variant={TextVariants.h3}>Likes Quantity</Text>
        <Input
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          placeholder="Enter the link of your post..."
        />
      </div>
    </div>
  );
};

NewOrderComponent.displayName = "NewOrder";
