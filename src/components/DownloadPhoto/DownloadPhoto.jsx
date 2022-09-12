import React from "react";

import {
  ButtonSizeVariants,
  ButtonVariants,
  ImagesVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { Text } from "../Text";

const DownloadPhoto = ({ profile }) => {
  return (
    <>
      <div className="download-photo">
        <div>
          <Text variant={TextVariants.h3}>Image</Text>
          <img
            className="image"
            src={ImagesVariants.ToolsDefaultSm}
            alt="toolsSmImg"
          />
        </div>
        <div className="example-container">
          <div className="example-image">
            <Text variant={TextVariants.h3}>Image</Text>
            <div></div>
          </div>
          <div className="buttons-container">
            {profile ? (
              <>
                <Button
                  variant={ButtonVariants.blue}
                  width="full"
                  text="Download Image"
                  size={ButtonSizeVariants.medium}
                  isLight={true}
                />
                <Button
                  variant={ButtonVariants.blue}
                  width="full"
                  text="Zoom HD Image"
                  size={ButtonSizeVariants.medium}
                  isLight={true}
                />
              </>
            ) : (
              <Button
                variant={ButtonVariants.blue}
                width="full"
                text="Download"
                size={ButtonSizeVariants.medium}
                isLight={true}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPhoto;
