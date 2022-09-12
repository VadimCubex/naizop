import React from "react";

import { StatisticTab } from "../../../StatisticTab";

const YoutubeTabSecond = ({ social }) => {
  return (
    <>
      <div className="youtube-second">
        <StatisticTab social={social} isLive={true} />
      </div>
    </>
  );
};

export default YoutubeTabSecond;
