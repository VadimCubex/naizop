import React from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { HowItWorks } from "../../components/HowItWorks";
import { Input } from "../../components/Input";
import { ServiceList } from "../../components/ServiceList";
import { Text } from "../../components/Text";
import { RecommendedService } from "./constants";
import {
  ButtonVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const MassOrder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mass-order">
        <Text variant={TextVariants.h1}>Mass Order</Text>
        <div className="mass-order-contant">
          <div className="block">
            <Text variant={TextVariants.h3}>One order per line in format</Text>
            <HowItWorks />
            <Input
              multiline={true}
              placeholder="service id | link | quantity"
            />
            <Button
              width="full"
              variant={ButtonVariants.blue}
              isLight={true}
              text="Support"
            />
          </div>
          <div className="services-lists">
            <ServiceList title="Recently Purchased" list={RecommendedService} />
            <ServiceList
              title="Recommended Services"
              list={RecommendedService}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MassOrder;
