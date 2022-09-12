import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Button } from "../../components/Button";
import { HowItWorks } from "../../components/HowItWorks";
import { NewOrder } from "../../components/NewOrder";
import { ServiceList } from "../../components/ServiceList";
import { Tab, TabPanel, Tabs } from "../../components/Tabs";
import { Text } from "../../components/Text";
import {
  ButtonSizeVariants,
  ButtonVariants,
  TabsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { RecommendedService } from "../MassOrder/constants";

const PlaceNewOrder = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [newOrders, setNewOrders] = useState([...Array(1)]);

  const handleClick = (event, active) => {
    setActiveTab(active);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="place-new-order">
        <Text variant={TextVariants.h1_medium}>Place New Order</Text>

        <div className="place-new-order-contant">
          <div className="tabs-panels-container">
            <Tabs
              variant={TabsVariants.Default}
              active={activeTab}
              onClick={handleClick}
            >
              <Tab title="New" />
              <Tab title="Favourite" />
            </Tabs>
            <TabPanel active={activeTab} index={0}>
              <div className="block">
                <HowItWorks />
                {newOrders.map((item, index) => (
                  <div key={index}>
                    <NewOrder />
                    {index !== newOrders.length - 1 && <hr />}
                  </div>
                ))}
                <Button
                  onClick={() => {
                    setNewOrders([...newOrders, ""]);
                  }}
                  width="full"
                  variant={ButtonVariants.blue}
                  isLight={true}
                  text="+ Add Order"
                />
                <hr />
                <div className="purchase">
                  <div className="info-container">
                    <div className="info">
                      <Text variant={TextVariants.h3}>Service Cost</Text>
                      <Text variant={TextVariants.h4}>
                        <Text variant={TextVariants.h2}>$24.00</Text> for 25.000
                        followers
                      </Text>
                    </div>
                    <div className="info">
                      <Text variant={TextVariants.h3}>Service Cost</Text>
                      <Text variant={TextVariants.h4}>8 Minutes</Text>
                    </div>
                  </div>
                  <Button
                    text="Purchase now"
                    variant={ButtonVariants.yellow}
                    isLight={true}
                    size={ButtonSizeVariants.large}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel active={activeTab} index={1}>
              <div className="block">
                <HowItWorks />
                {newOrders.map((item, index) => (
                  <div key={index}>
                    <NewOrder />
                    {index !== newOrders.length - 1 && <hr />}
                  </div>
                ))}
                <Button
                  onClick={() => {
                    setNewOrders([...newOrders, ""]);
                  }}
                  width="full"
                  variant={ButtonVariants.blue}
                  isLight={true}
                  text="+ Add Order"
                />
                <hr />
                <div className="purchase">
                  <div className="info-container">
                    <div className="info">
                      <Text variant={TextVariants.h3}>Service Cost</Text>
                      <Text variant={TextVariants.h4}>
                        <Text variant={TextVariants.h2}>$24.00</Text> for 25.000
                        followers
                      </Text>
                    </div>
                    <div className="info">
                      <Text variant={TextVariants.h3}>Service Cost</Text>
                      <Text variant={TextVariants.h4}>8 Minutes</Text>
                    </div>
                  </div>
                  <Button
                    text="Purchase now"
                    variant={ButtonVariants.yellow}
                    isLight={true}
                    size={ButtonSizeVariants.large}
                  />
                </div>
              </div>
            </TabPanel>
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

export default PlaceNewOrder;
