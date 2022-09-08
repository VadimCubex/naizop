import React from "react";

import { DownloadLink } from "../../../DownloadLink";

const InstagramTabSixth = ({ social }) => {
  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[5].menuItem}
      />
    </>
  );
};

export default InstagramTabSixth;
