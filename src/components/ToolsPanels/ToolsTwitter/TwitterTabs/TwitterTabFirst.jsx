import React from "react";

import { DownloadLink } from "../../../DownloadLink";
import DownloadSocialVideo from "../../../DownloadSocialVideo/DownloadSocialVideo";
import { TwitterVideo } from "../constants";

const TwitterTabFirst = ({ social }) => {
  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[0].menuItem}
      />
      <div className="twitter-first">
        <DownloadSocialVideo item={TwitterVideo} className="twitter" />
      </div>
    </>
  );
};

export default TwitterTabFirst;
