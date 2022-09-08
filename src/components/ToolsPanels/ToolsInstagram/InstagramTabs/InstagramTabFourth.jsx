import React from "react";

import { DownloadLink } from "../../../DownloadLink";
import { ReasonsToUse } from "../../../ReasonsToUse";

const InstagramTabFourth = ({ social }) => {
  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[3].menuItem}
      />
      <ReasonsToUse />
    </>
  );
};

export default InstagramTabFourth;
