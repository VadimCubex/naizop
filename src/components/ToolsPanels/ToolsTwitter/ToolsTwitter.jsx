import React from "react";
import classNames from "classnames";

import TwitterTabFirst from "./TwitterTabs/TwitterTabFirst";
import TwitterTabSecond from "./TwitterTabs/TwitterTabSecond";
import { TabPanel } from "../../Tabs";

const ToolsTwitter = ({ social, activeTab }) => {
  const ToolsTwitterClass = classNames("twitter-tools");

  const TabsMap = {
    0: <TwitterTabFirst social={social} />,
    1: <TwitterTabSecond social={social} />,
  };

  return (
    <div className={ToolsTwitterClass}>
      {Object.values(TabsMap).map((item, index) => (
        <TabPanel key={index} active={activeTab} index={index}>
          {item}
        </TabPanel>
      ))}
    </div>
  );
};

export default ToolsTwitter;
