import React, { useState } from "react";
import classNames from "classnames";

import { Shares } from "../../pages/BlogArticle/constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { numberWithCommas } from "../../helpers/helpers";
import { Button } from "../Button";
import { CardSelect } from "../CardSelect";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const StatisticTabComponent = ({ social, isLive, className }) => {
  const StatisticTabClass = classNames("statistic-tab", className);
  const [activeShares, setActiveShares] = useState({});

  const handleClickShares = (item) => {
    setActiveShares(item);
  };

  const PostsMap = {
    Instagram: "Posts",
    TikTok: "Posts",
    Twitter: "Twitts",
  };

  return (
    <div className={StatisticTabClass}>
      <Text variant={TextVariants.h3}>Your {social.title}</Text>
      <div className={classNames("info", { live: isLive })}>
        <div>
          <div className="account-info">
            <SvgIcon src={social.icon} size={100} />
            <div>
              <Text variant={TextVariants.h3}>{social.title}</Text>
              <Text variant={TextVariants.h4_regular}>@{social.subTitle}</Text>
            </div>
          </div>
          <div className="block followers">
            <Text variant={TextVariants.h1_medium} className="text-big">
              {numberWithCommas(social.followers)}
            </Text>
            <Text variant={TextVariants.h3}>
              {social.title !== "YouTube"
                ? "Followers"
                : isLive
                ? "Views"
                : "Subscribers"}
            </Text>
          </div>
        </div>
        {!isLive && (
          <div className="statistics">
            {social.title !== "YouTube" ? (
              <>
                <div className="block">
                  <Text variant={TextVariants.h2}>
                    {numberWithCommas(social.following)}
                  </Text>
                  <Text variant={TextVariants.h3}>Following</Text>
                </div>
                <div className="block">
                  <Text variant={TextVariants.h2}>
                    {numberWithCommas(social?.posts || social?.twitts)}
                  </Text>
                  <Text variant={TextVariants.h3}>
                    {PostsMap[social.title]}
                  </Text>
                </div>
              </>
            ) : (
              <div className="block">
                <Text variant={TextVariants.h1_medium} className="text-big">
                  {numberWithCommas(social.views)}
                </Text>
                <Text variant={TextVariants.h3}>Views</Text>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="logo-separation">
        <div className="separator"></div>
        <div className="logo">
          <SvgIcon size={48} src={IconsVariants.Logo} />
          <Text variant={TextVariants.h1_medium}>Naizop</Text>
        </div>
        <div className="separator"></div>
      </div>
      <div className="sharing">
        <div className="shares-container">
          <CardSelect
            title="Share"
            value={activeShares}
            onClick={handleClickShares}
            options={Shares}
          />
          <Button
            variant={ButtonVariants.blue}
            width="full"
            text="Download"
            size={ButtonSizeVariants.medium}
            isLight={true}
          />
        </div>
        <div className="example-container">
          <Text variant={TextVariants.h3}>Share</Text>
          <div className="default"></div>
        </div>
      </div>
    </div>
  );
};

StatisticTabComponent.displayName = "StatisticTab";
