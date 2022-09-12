import React from "react";

import { DownloadLink } from "../../../DownloadLink";
import DownloadVideo from "../../../DownloadVideo/DownloadVideo";

const InstagramTabFifth = ({ social }) => {
  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[4].menuItem}
      />
      <div className="instagram-fifth">
        <DownloadVideo />
      </div>
    </>
  );
};

export default InstagramTabFifth;
