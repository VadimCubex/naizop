import React from "react";
import { useState } from "react";
import classNames from "classnames";

import {
  ButtonSizeVariants,
  ButtonVariants,
  ImagesVariants,
  TextVariants,
} from "../../../../constants/VariantsOfComponents";
import { Button } from "../../../Button";
import { DownloadLink } from "../../../DownloadLink";
import { Text } from "../../../Text";

const InstagramTabThird = ({ social }) => {
  const [selectedStories, setSelectedStories] = useState([]);

  const handleClick = (item) => {
    if (selectedStories.includes(item)) {
      setSelectedStories([
        ...selectedStories.filter((value) => value !== item),
      ]);
      return;
    }
    setSelectedStories([...selectedStories, item]);
  };

  return (
    <>
      <DownloadLink
        social={social.subTitle}
        menuItem={social.subTabs[2].menuItem}
      />
      <div className="instagram-third">
        <Text variant={TextVariants.h3}>Stories</Text>
        <div className="stories">
          {[...Array(5)].map((item, index) => (
            <div
              key={index}
              className={classNames("story", {
                active: selectedStories.includes(index),
              })}
              onClick={() => handleClick(index)}
            >
              <div className="selected"></div>
              <img src={ImagesVariants.ToolsDefaultBg} alt="" />
            </div>
          ))}
          <div className="story">
            <div className="default"></div>
          </div>
        </div>
        <Button
          variant={ButtonVariants.blue}
          isLight={true}
          width="full"
          text="Download"
          size={ButtonSizeVariants.medium}
        />
        <div className="story">
          <div className="default"></div>
          <img src={ImagesVariants.ToolsDefaultBg} alt="" />
        </div>
      </div>
    </>
  );
};

export default InstagramTabThird;
