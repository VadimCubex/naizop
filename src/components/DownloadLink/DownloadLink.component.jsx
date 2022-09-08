import React from "react";
import { useState } from "react";
import classNames from "classnames";

import {
  ButtonSizeVariants,
  ButtonVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { Input } from "../Input";
import { Text } from "../Text";
import { Trustpilot } from "../Trustpilot";

export const DownloadLinkComponent = ({ social, menuItem, className }) => {
  const DownloadLinkClass = classNames("download-link", className);
  const [link, setLink] = useState("");

  return (
    <div className={DownloadLinkClass}>
      <Trustpilot />
      <div className="example">
        <div className="download">
          <Input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder={`Example: https://www.${social}.com`}
          />
          <Button
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
    </div>
  );
};

DownloadLinkComponent.displayName = "DownloadLink";
