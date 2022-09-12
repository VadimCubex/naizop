import React, { useState } from "react";

import { DownloadLink } from "../../../DownloadLink";
import DownloadYoutubeVideo from "../../../DownloadYoutubeVideo/DownloadYoutubeVideo";
import { ReasonsToUse } from "../../../ReasonsToUse";
import { YoutubeVideo } from "../constants";

const YoutubeTabFirst = ({ social }) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[0].menuItem}
        onClick={() => setIsDownloaded(true)}
      />
      <div className="youtube-first">
        {!isDownloaded ? (
          <>
            <div className="default"></div>
            <ReasonsToUse />
          </>
        ) : (
          <DownloadYoutubeVideo item={YoutubeVideo} />
        )}
      </div>
    </>
  );
};

export default YoutubeTabFirst;
