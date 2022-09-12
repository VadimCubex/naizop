import React from "react";
import classNames from "classnames";

import TiktokTabFirst from "./TiktokTabs/TiktokTabFirst";
import TiktokTabSecond from "./TiktokTabs/TiktokTabSecond";
import { TabPanel } from "../../Tabs";

const ToolsTiktok = ({ social, activeTab }) => {
  const ToolsTiktokClass = classNames("tiktok-tools");

  const TabsMap = {
    0: <TiktokTabFirst social={social} />,
    1: <TiktokTabSecond social={social} />,
  };

  return (
    <div className={ToolsTiktokClass}>
      {Object.values(TabsMap).map((item, index) => (
        <TabPanel key={index} active={activeTab} index={index}>
          {item}
        </TabPanel>
      ))}
    </div>
  );
};

export default ToolsTiktok;
