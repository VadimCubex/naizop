import React, { useState } from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import {
  ButtonSizeVariants,
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const TrackYourOrder = () => {
  const [name, setName] = useState("");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="track-your-order">
        <Text variant={TextVariants.h1_medium}>Track Your Order</Text>
        <div className="block track-your-order-contant">
          <div className="inputs">
            <div className="input-track">
              <div className="title">
                <Text variant={TextVariants.h3}>Tracking name</Text>
                <SvgIcon
                  size={20}
                  src={IconsVariants.Question}
                  color={ColorSvgVariants.white}
                />
              </div>
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter your tracking name..."
              />
            </div>
            <div className="input-track">
              <div className="title">
                <Text variant={TextVariants.h3}>Order ID</Text>
                <SvgIcon
                  size={20}
                  src={IconsVariants.Question}
                  color={ColorSvgVariants.white}
                />
              </div>
              <Input
                value={orderId}
                onChange={(e) => {
                  setOrderId(e.target.value);
                }}
                placeholder="Enter your order ID..."
              />
            </div>
          </div>
          <Button
            disabled={!(name !== "" && orderId !== "")}
            variant={ButtonVariants.crypto}
            size={ButtonSizeVariants.large}
            text="Track"
          />
        </div>
      </div>
    </>
  );
};

export default TrackYourOrder;
