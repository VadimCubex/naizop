import React, { useState } from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { SliderOrder } from "../../components/SliderOrder";
import { Steper } from "../../components/Steper";
import { SvgIcon } from "../../components/SvgIcon";
import { TabPanel } from "../../components/Tabs";
import { Text } from "../../components/Text";
import { Plan, SlidesOrderDetail } from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const OrderDetail = () => {
  const [Social] = useState(JSON.parse(localStorage.getItem("social")));
  const [Category] = useState(JSON.parse(localStorage.getItem("category")));
  const [plan] = useState(createPlan());
  const [selectedPlan, setSelectedPlan] = useState(plan[0]);
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(false);

  function createPlan() {
    const new_plan = [];
    Plan.forEach((item) => {
      const itemForPlan = {};
      itemForPlan.title =
        Social.title + " - " + item.title + " " + Category.value;
      itemForPlan.icon = Social.icon;
      itemForPlan.icon_stroke = Social.icon_stroke;
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
        <Steper active={activeStep} steps={[...Array(3)]} />
        <TabPanel active={activeStep} index={0}>
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
              <div className="info plan">
                <Text variant={TextVariants.h3}>Selected plan</Text>
                <Select
                  onClick={setSelectedPlan}
                  selected={selectedPlan}
                  variant={SelectOptionVariants.default}
                  options={plan}
                />
              </div>
              <div className="sms">
                <Checkbox
                  value={checked}
                  onChange={() => setChecked(!checked)}
                  text="I want to recieve SMS about my order"
                />
              </div>
              <div className="continue">
                <Button
                  onClick={() => setActiveStep(1)}
                  variant={ButtonVariants.crypto}
                  size={ButtonSizeVariants.extra_large}
                  text="Continue"
                />
              </div>
            </div>
            <div className="order-slider">
              <SliderOrder slides={SlidesOrderDetail} />
            </div>
          </div>
        </TabPanel>
        <TabPanel active={activeStep} index={1}>
          <div className="order-detail-contant"></div>
        </TabPanel>
        <TabPanel active={activeStep} index={2}>
          <div className="order-detail-contant"></div>
        </TabPanel>
      </div>
    </>
  );
};

export default OrderDetail;
