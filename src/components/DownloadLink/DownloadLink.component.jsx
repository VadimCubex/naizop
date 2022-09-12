import React from "react";
import { useState } from "react";
import classNames from "classnames";

import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { Input } from "../Input";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";
import { Trustpilot } from "../Trustpilot";

export const DownloadLinkComponent = ({
  social,
  menuItem,
  onClick,
  className,
}) => {
  const DownloadLinkClass = classNames("download-link", className);
  const [link, setLink] = useState("");

  return (
    <div className={DownloadLinkClass}>
      <Trustpilot />
      <div className="example">
        <div className="download">
          <div>
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={`Example: https://www.${social}.com`}
            />
            <Text variant={TextVariants.subtitle_small}>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Text>
          </div>
          <Button
            onClick={onClick}
            text={`Download ${menuItem}`}
            variant={ButtonVariants.crypto}
            size={ButtonSizeVariants.extra_large}
          />
        </div>
        <Text variant={TextVariants.subtitle_small}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </Text>
      </div>
      <div className="trustpilot-container">
        <div className="separator"></div>
        <div className="trustpilot">
          <div>
            <Text variant={TextVariants.h4}>Excellent</Text>
            <div className="trustpilot-stars">
              {[...Array(5)].map((item, index) => (
                <SvgIcon key={index} size={16} src={IconsVariants.Trustpilot} />
              ))}
            </div>
          </div>
          <div className="trustpilot-reviews">
            <Text variant={TextVariants.h4_regular}>
              <Text>456</Text> reviews on
            </Text>
            <div>
              <SvgIcon size={14} src={IconsVariants.Trustpilot} />
              <Text variant={TextVariants.h4}>Trustpilot</Text>
            </div>
          </div>
        </div>
        <div className="separator"></div>
      </div>
    </div>
  );
};

DownloadLinkComponent.displayName = "DownloadLink";
