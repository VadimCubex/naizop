import React from "react";
import { useState } from "react";
import classNames from "classnames";

import { Formats } from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { numberToVideoLenght } from "../../helpers/helpers";
import { Button } from "../Button";
import { Select } from "../Select";
import { Text } from "../Text";

const DownloadSocialVideo = ({ item, className }) => {
  const DownloadSocialVideoClass = classNames(
    "download-social-video",
    className
  );
  const [selectedFormat, setSelectedFormat] = useState(Formats[0]);

  return (
    <>
      <div className={DownloadSocialVideoClass}>
        <div>
          <Text variant={TextVariants.h3}>Your Video</Text>
          <img className="image" src={item.image} alt="toolsSmImg" />
          <div className="info">
            <Text variant={TextVariants.h1}>{item.name}</Text>
            <Text variant={TextVariants.h3_regular}>
              {numberToVideoLenght(item.timing)}
            </Text>
          </div>
        </div>
        <div className="example-container">
          <Text variant={TextVariants.h3}>Format</Text>
          <div className="formats">
            <Select
              value={selectedFormat}
              setValue={setSelectedFormat}
              variant={SelectOptionVariants.Default}
              options={Formats}
            />
          </div>
          <div className="tools-container">
            <div className="buttons-container">
              <div className="example-image"></div>
              <div>
                <Button
                  variant={ButtonVariants.blue}
                  width="full"
                  text="Dropbox"
                  size={ButtonSizeVariants.medium}
                  isLight={true}
                />
                <Button
                  variant={ButtonVariants.blue}
                  width="full"
                  text="QR Code"
                  size={ButtonSizeVariants.medium}
                  isLight={true}
                />
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
      </div>
    </>
  );
};

export default DownloadSocialVideo;
