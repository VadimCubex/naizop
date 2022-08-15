import React, { useState } from "react";
import { useEffect } from "react";

import { Input } from "../../components/Input";
import { SlidesForBestQualityService } from "../../components/ReasonsToUse/constants";
import { Select } from "../../components/Select";
import { SliderReviews } from "../../components/SliderReviews";
import { Steper } from "../../components/Steper";
import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import { Plan } from "./constants";
import {
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const OrderDetail = () => {
  const [Social] = useState(JSON.parse(localStorage.getItem("social")));
  const [Category] = useState(JSON.parse(localStorage.getItem("category")));
  const [plan] = useState(createPlan());
  const [selectedPlan, setSelectedPlan] = useState(plan[0]);

  function createPlan() {
    const new_plan = [];
    Plan.forEach((item) => {
      const itemForPlan = {};
      itemForPlan.title =
        Social.title + " - " + item.title + " " + Category.value;
      itemForPlan.icon = Social.icon;
      itemForPlan.count = item.count;
      new_plan.push(itemForPlan);
    });
    return new_plan;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="order-detail container">
        <div className="order-detail-background"></div>
        <Text variant={TextVariants.title}>Order Detail</Text>
        <Steper />
        <div className="order-detail-contant">
          <div className="block">
            <div className="info">
              <div className="username">
                <div>
                  <SvgIcon src={Social.icon} size={24} />
                </div>
                <Text variant={TextVariants.h3}>{Social.title} Username</Text>
              </div>
              <Input placeholder="Enter the link of your post..." />
            </div>
            <div className="info">
              <Text variant={TextVariants.h3}>E-mail Address</Text>
              <Input placeholder="Enter the link of your post..." />
            </div>
            <div className="info">
              <Text variant={TextVariants.h3}>Phone Number</Text>
              <Input placeholder="Enter the link of your post..." />
            </div>
            <div className="info">
              <Text variant={TextVariants.h3}>Selected plan</Text>
              <Select
                onClick={setSelectedPlan}
                selected={selectedPlan}
                variant={SelectOptionVariants.default}
                options={plan}
              />
            </div>
          </div>
          <div className="order-slider">
            <SliderReviews
              title="Here’s what our customers say"
              slides={SlidesForBestQualityService}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
