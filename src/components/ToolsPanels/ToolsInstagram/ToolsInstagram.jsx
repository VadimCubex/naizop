import React from "react";
import classNames from "classnames";

import InstagramTabFifth from "./InstagramTabs/InstagramTabFifth";
import InstagramTabFirst from "./InstagramTabs/InstagramTabFirst";
import InstagramTabFourth from "./InstagramTabs/InstagramTabFourth";
import InstagramTabSecond from "./InstagramTabs/InstagramTabSecond";
import InstagramTabSixth from "./InstagramTabs/InstagramTabSixth";
import InstagramTabThird from "./InstagramTabs/InstagramTabThird";
import { TabPanel } from "../../Tabs";

const ToolsInstagram = ({ social, activeTab }) => {
  const ToolsInstagramClass = classNames("instagram-tools");

  const TabsMap = {
    0: <InstagramTabFirst social={social} />,
    1: <InstagramTabSecond social={social} />,
    2: <InstagramTabThird social={social} />,
    3: <InstagramTabFourth social={social} />,
    4: <InstagramTabFifth social={social} />,
    5: <InstagramTabSixth social={social} />,
  };

  return (
    <div className={ToolsInstagramClass}>
      {Object.values(TabsMap).map((item, index) => (
        <TabPanel key={index} active={activeTab} index={index}>
          {item}
        </TabPanel>
      ))}
    </div>
  );
};

export default ToolsInstagram;
