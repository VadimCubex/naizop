import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { ReasonsToUse } from "../../components/ReasonsToUse";
import { Select } from "../../components/Select";
import { SvgIcon } from "../../components/SvgIcon";
import { Tab, TabPanel, Tabs } from "../../components/Tabs";
import { Text } from "../../components/Text";
import { TabsName } from "./constants";
import {
  ColorSvgVariants,
  SelectOptionVariants,
  TabsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

// import { Trustpilot } from "../../components/Trustpilot";

const Tools = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [activeSocial, setActiveSocial] = useState(TabsName[0]);

  const handleClickTab = (event, active) => {
    setActiveTab(active);
  };

  const handleClickSubTab = (event, active) => {
    setActiveSubTab(active);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="best-quality-service ">
        <div className="best-quality-service-contant">
          <Tabs
            variant={TabsVariants.Default}
            active={activeTab}
            onClick={handleClickTab}
          >
            {TabsName.map((item, index) => (
              <Tab
                key={index}
                titleComponent={
                  <>
                    <div
                      onClick={() => {
                        setActiveSocial(item);
                      }}
                      className="tab-title"
                    >
                      <SvgIcon src={item.icon} />
                      <Text variant={TextVariants.h2_medium}>{item.title}</Text>
                    </div>
                    {activeTab - 1 === index ||
                      (activeTab !== index && index !== TabsName.length - 1 && (
                        <div className="separator"></div>
                      ))}
                  </>
                }
              />
            ))}
          </Tabs>
          <div className="select-tab">
            <Select
              onClick={setActiveSocial}
              selected={activeSocial}
              variant={SelectOptionVariants.default}
              options={TabsName}
            />
          </div>
          <div className="quality">
            <Tabs
              active={activeSubTab}
              onClick={handleClickSubTab}
              variant={TabsVariants.Outline}
            >
              {activeSocial.subTabs.map((item, index) => (
                <Tab
                  key={index}
                  titleComponent={
                    <div className="subtab-title">
                      <SvgIcon src={item.icon} color={ColorSvgVariants.white} />
                      <Text variant={TextVariants.h3}>{item.title}</Text>
                    </div>
                  }
                />
              ))}
            </Tabs>
            <TabPanel active={activeSubTab} index={0}></TabPanel>
            <TabPanel active={activeSubTab} index={1}>
              <ReasonsToUse />
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
