import React from "react";
import classNames from "classnames";

import {
  Advantages,
  ReadyCardInfo,
  ReasonsInfoPartFirst,
  ReasonsInfoPartSecond,
  ReasonsSteps,
  SlidesForBestQualityService,
} from "./constants";
import {
  ColorSvgVariants,
  ImagesVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Accordion } from "../Accordion";
import { SliderReviews } from "../SliderReviews";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const ReasonsToUseComponent = ({ className }) => {
  const ReasonsToUseClass = classNames("reasons-to-use", className);

  return (
    <div className={ReasonsToUseClass}>
      <div className="advantages-container">
        <div className="advantages">
          {Advantages.map((item, index) => (
            <div key={index} className="advanteg-container">
              {index !== 0 && <div className="separator"></div>}
              <div className="advanteg">
                <div className="for-svg">
                  <div>
                    <SvgIcon
                      src={item.icon}
                      size={30}
                      color={ColorSvgVariants.white}
                    />
                  </div>
                </div>
                <Text variant={TextVariants.h4_regular}>{item.text}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="reasons-steps">
        <Text variant={TextVariants.h1}>How it works?</Text>
        <div className="steps-container">
          {ReasonsSteps.map((item, index) => (
            <div key={index} className="step-item">
              <div className="info-container">
                <Text variant={TextVariants.h1}>{item.number}</Text>
                <div>
                  <Text variant={TextVariants.h1}>{item.title}</Text>
                  <Text variant={TextVariants.h4_regular}>
                    {item.info}{" "}
                    {index === 0 && (
                      <>
                        <Text variant={TextVariants.h4_regular}>
                          contact us
                        </Text>
                        <Text variant={TextVariants.h4_regular}>!</Text>
                      </>
                    )}
                  </Text>
                </div>
              </div>
              <div className="image-container">
                <div>
                  <img src={item.image} alt="step" />
                </div>
              </div>
            </div>
          ))}
          <div className="line1">
            <img src={ImagesVariants.Line1} alt="line" />
          </div>
          <div className="line2">
            <img src={ImagesVariants.Line2} alt="line" />
          </div>
        </div>
      </div>
      <div className="ready">
        <Text variant={TextVariants.h1}>Ready to buy Instagram followers?</Text>
        <Text variant={TextVariants.h4_regular}>
          Followers are crucial to your Instagram growth and success. When you
          buy Instagram followers from Twicsy, you{`'`}ll see your Instagram
          profile quickly gain more recognition, visibility, and exposure.
        </Text>

        <div className="ready-cards-container">
          {ReadyCardInfo.map((item, index) => (
            <div key={index} className="ready-card">
              <img src={item.image} alt="" />
              <div className="info">
                <Text variant={TextVariants.h3}>{item.title}</Text>
                <Text variant={TextVariants.h5_regular}>{item.content}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="reasons">
        <Text variant={TextVariants.h1}>
          Buy Instagram Followers easily with Naizop
        </Text>

        <div className="reasons-accordions-container">
          <div className="reasons-accordions">
            {ReasonsInfoPartFirst.map((item, index) => (
              <Accordion key={index} icon={item.icon} title={item.title}>
                {item.contant.map((text, index) => (
                  <Text key={index} variant={TextVariants.h5_regular}>
                    {text}
                  </Text>
                ))}
              </Accordion>
            ))}
          </div>
          <div className="reasons-accordions">
            {ReasonsInfoPartSecond.map((item, index) => (
              <Accordion key={index} icon={item.icon} title={item.title}>
                {item.contant.map((text, index_text) => (
                  <Text key={index_text} variant={TextVariants.h5_regular}>
                    {text}
                  </Text>
                ))}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      <SliderReviews
        title="Here’s what our customers say"
        slides={SlidesForBestQualityService}
      />
    </div>
  );
};

ReasonsToUseComponent.displayName = "ReasonsToUse";
