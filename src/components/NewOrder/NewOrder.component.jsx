import React, { useState } from "react";
import classNames from "classnames";

import {
  NewOrderCategory,
  NewOrderService,
} from "../../pages/PlaceNewOrder/constants";
import {
  ColorSvgVariants,
  IconsVariants,
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Filter } from "../Filter";
import { Input } from "../Input";
import { Select } from "../Select";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const NewOrderComponent = ({ className }) => {
  const NewOrderClass = classNames("newOrder", className);

  const [selectedCategory, setSelectedCategory] = useState(NewOrderCategory[0]);
  const [selectedService, setSelectedService] = useState(NewOrderService[0]);

  const [description, setDescription] = useState("");
  const [postLink, setPostLink] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div className={NewOrderClass}>
      <Filter withSelect={true} />
      <div className="chunk category">
        <Text variant={TextVariants.h3}>Category</Text>
        <Select
          options={NewOrderCategory}
          selected={selectedCategory}
          onClick={setSelectedCategory}
          variant={SelectOptionVariants.newOrderWithoutDeteil}
        />
      </div>
      <div className="chunk service">
        <Text variant={TextVariants.h3}>Service</Text>
        <Select
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
      <div className="chunk">
        <Text variant={TextVariants.h3}>Post Link</Text>
        <Input
          value={postLink}
          onChange={(e) => {
            setPostLink(e.target.value);
          }}
          placeholder="Enter the link of your post..."
          rightSide={
            <SvgIcon
              src={IconsVariants.History}
              color={ColorSvgVariants.white}
            />
          }
        />
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
