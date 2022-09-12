import React from "react";
import { useState } from "react";

import { Sizes } from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  ImagesVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { CardSelect } from "../CardSelect";
import { Text } from "../Text";

const DownloadVideo = ({ reels }) => {
  const [selectedSize, setSelectedSize] = useState(0);

  const handleClickSize = (value) => {
    setSelectedSize(value);
  };

  return (
    <>
      <div className="download-video">
        <div>
          <Text variant={TextVariants.h3}>
            {reels ? "Your Reels" : "Your Video"}
          </Text>
          <img
            className="image"
            src={
              reels
                ? ImagesVariants.ToolsDefaultBg
                : ImagesVariants.ToolsDefaultMd
            }
            alt="toolsSmImg"
          />
        </div>
        <div className="example-container">
          <Text variant={TextVariants.h3}>Select size</Text>
          <div className="tools-container">
            <div className="sizes">
              <CardSelect
                value={selectedSize}
                onClick={handleClickSize}
                options={Sizes}
              />
            </div>
            <div className="buttons-container">
              <div className="example-image"></div>
              <Button
                variant={ButtonVariants.blue}
                width="full"
                text="Download"
                size={ButtonSizeVariants.medium}
                isLight={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadVideo;
