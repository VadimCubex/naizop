import React from "react";
import classNames from "classnames";

import YoutubeTabFirst from "./YoutubeTabs/YoutubeTabFirst";
import YoutubeTabSecond from "./YoutubeTabs/YoutubeTabSecond";
import YoutubeTabThird from "./YoutubeTabs/YoutubeTabThird";
import { TabPanel } from "../../Tabs";

const ToolsYoutube = ({ social, activeTab }) => {
  const ToolsYoutubeClass = classNames("youtube-tools");

  const TabsMap = {
    0: <YoutubeTabFirst social={social} />,
    1: <YoutubeTabSecond social={social} />,
    2: <YoutubeTabThird social={social} />,
  };

  return (
    <div className={ToolsYoutubeClass}>
      {Object.values(TabsMap).map((item, index) => (
        <TabPanel key={index} active={activeTab} index={index}>
          {item}
        </TabPanel>
      ))}
    </div>
  );
};

export default ToolsYoutube;
