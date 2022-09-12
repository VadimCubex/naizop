import React from "react";
import { useState } from "react";

import { Formats } from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { Select } from "../Select";
import { Text } from "../Text";

const DownloadYoutubeVideo = ({ item }) => {
  const [selectedFormat, setSelectedFormat] = useState(Formats[0]);

  return (
    <>
      <div className="download-youtube-video">
        <div>
          <Text variant={TextVariants.h3}>Your Video</Text>
          <img className="image" src={item.image} alt="toolsSmImg" />
          <Text variant={TextVariants.h1}>{item.name}</Text>
        </div>
        <div className="example-container">
          <Text variant={TextVariants.h3}>Select format</Text>
          <div className="formats">
            <Select
              value={selectedFormat}
              setValue={setSelectedFormat}
              variant={SelectOptionVariants.Format}
              options={Formats}
            />
          </div>
          <div className="tools-container">
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

export default DownloadYoutubeVideo;
