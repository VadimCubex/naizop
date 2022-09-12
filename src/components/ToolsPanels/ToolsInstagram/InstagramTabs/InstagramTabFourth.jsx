import React from "react";
import { useState } from "react";

import { DownloadLink } from "../../../DownloadLink";
import DownloadVideo from "../../../DownloadVideo/DownloadVideo";
import { ReasonsToUse } from "../../../ReasonsToUse";

const InstagramTabFourth = ({ social }) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[3].menuItem}
        onClick={() => setIsDownloaded(true)}
      />
      <div className="instagram-fourth">
        {!isDownloaded ? (
          <>
            <div className="default"></div>
            <ReasonsToUse />
          </>
        ) : (
          <DownloadVideo reels={true} />
        )}
      </div>
    </>
  );
};

export default InstagramTabFourth;
