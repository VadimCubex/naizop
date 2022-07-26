import React from "react";
import classNames from "classnames";

import { FooterInfo } from "../../constants/constants";
import {
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { FooterCard } from "../Cards";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const FooterComponent = ({ className }) => {
  const FooterClass = classNames("footer", className);

  return (
    <footer className={FooterClass}>
      <div className="container footer-container">
        <div className="links-container">
          <div className="footer-card-logo">
            <SvgIcon src={IconsVariants.Logo} size={48} />
            <Text variant={TextVariants.h1_medium}>Naizop</Text>
          </div>
          <div className="links">
            {FooterInfo.map((item, index) => (
              <FooterCard key={index} item={item} />
            ))}
            <div className="footer-card-trustpilot">
              <div>
                <Text variant={TextVariants.h2}>Excellent</Text>
                <div className="trustpilot-stars">
                  {[...Array(5)].map((item, index) => (
                    <SvgIcon
                      key={index}
                      size={28}
                      src={IconsVariants.Trustpilot}
                    />
                  ))}
                </div>
              </div>
              <div className="trustpilot-reviews">
                <Text variant={TextVariants.h3_regular}>
                  Based on <Text>456 reviews</Text> on
                </Text>
                <div>
                  <SvgIcon size={21} src={IconsVariants.Trustpilot} />
                  <Text className="" variant={TextVariants.h2}>
                    Trustpilot
                  </Text>
                </div>
              </div>
              <div className="trustpilot-light"></div>
            </div>
          </div>
        </div>
        <hr />
        <Text variant={TextVariants.h4_regular}>
          © naizop.com All rights reserved
        </Text>
      </div>
    </footer>
  );
};

FooterComponent.displayName = "Footer";
