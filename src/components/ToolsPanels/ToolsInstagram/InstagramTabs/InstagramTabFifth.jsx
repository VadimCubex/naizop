import React from "react";

import { DownloadLink } from "../../../DownloadLink";

const InstagramTabFifth = ({ social }) => {
  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[4].menuItem}
      />
    </>
  );
};

export default InstagramTabFifth;
