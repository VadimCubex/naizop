import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Select } from "../../components/Select";
import { SvgIcon } from "../../components/SvgIcon";
import { Tab, Tabs } from "../../components/Tabs";
import { Text } from "../../components/Text";
import { ToolsPanels } from "../../components/ToolsPanels";
import { TabsName } from "./constants";
import {
  ColorSvgVariants,
  SelectOptionVariants,
  TabsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

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
      <div className="tools-page">
        <div className="tools-page-contant">
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
            <div className="tabs-container">
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
                        <div>
                          <SvgIcon
                            src={item.icon}
                            color={ColorSvgVariants.white}
                          />
                        </div>
                        <Text variant={TextVariants.h3}>{item.title}</Text>
                      </div>
                    }
                  />
                ))}
              </Tabs>
            </div>
            <ToolsPanels social={activeSocial} activeTab={activeSubTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
