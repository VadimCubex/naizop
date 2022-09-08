import React from "react";

import { DownloadLink } from "../../../DownloadLink";
import DownloadPhoto from "../../../DownloadPhoto/DownloadPhoto";

const InstagramTabSecond = ({ social }) => {
  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[1].menuItem}
      />
      <div className="instagram-first">
        <DownloadPhoto profile={false} />
      </div>
    </>
  );
};

export default InstagramTabSecond;
