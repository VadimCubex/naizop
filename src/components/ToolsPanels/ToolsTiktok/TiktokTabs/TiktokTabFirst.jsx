import React from "react";

import { DownloadLink } from "../../../DownloadLink";
import DownloadSocialVideo from "../../../DownloadSocialVideo/DownloadSocialVideo";
import { TiktokVideo } from "../constants";

const TiktokTabFirst = ({ social }) => {
  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[0].menuItem}
      />
      <div className="tiktok-first">
        <DownloadSocialVideo item={TiktokVideo} className="tiktok" />
      </div>
    </>
  );
};

export default TiktokTabFirst;
