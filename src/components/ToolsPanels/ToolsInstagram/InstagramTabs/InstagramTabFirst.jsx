import React from "react";

import { DownloadLink } from "../../../DownloadLink";
import DownloadPhoto from "../../../DownloadPhoto/DownloadPhoto";

const InstagramTabFirst = ({ social }) => {
  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[0].menuItem}
      />
      <div className="instagram-first">
        <DownloadPhoto profile={true} />
      </div>
    </>
  );
};

export default InstagramTabFirst;
