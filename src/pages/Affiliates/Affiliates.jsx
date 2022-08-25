import React from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import { Joins, Rewards, Socials } from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  ImagesVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Affiliates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="affiliates">
        <Text variant={TextVariants.h1_medium}>Affiliates</Text>
        <div className="affiliates-contant">
          <div>
            {Joins.map((item, index) => (
              <div key={index} className="join">
                <Text variant={TextVariants.h1}>{item.title}</Text>
                <Text variant={TextVariants.h4_regular}>{item.info}</Text>
              </div>
            ))}
          </div>
          <div className="promote">
            <img src={ImagesVariants.Affiliates} alt="affiliates" />
            <Text variant={TextVariants.h2_medium}>
              Invite Your Friends with your{" "}
              <Text variant={TextVariants.h1}>referal link</Text> and you will
              earn <Text variant={TextVariants.h1}>10%</Text> of the money spent
              by your referrals for life!
            </Text>
          </div>
          <div className="promote">
            <Text variant={TextVariants.h1}>Watch how to use the service</Text>
            <img src={ImagesVariants.Affiliates_house} alt="affiliates" />
          </div>
          <div className="affiliates-tools-container">
            <div className="block input">
              <Text variant={TextVariants.h3}>Set your referral code</Text>
              <div>
                <Input />
                <Button
                  text="Set code"
                  variant={ButtonVariants.blue}
                  size={ButtonSizeVariants.medium}
                  isLight={true}
                />
              </div>
            </div>
            <div className="block input">
              <Text variant={TextVariants.h3}>Your link</Text>
              <div>
                <Input />
                <Button
                  text="Copy"
                  variant={ButtonVariants.blue}
                  size={ButtonSizeVariants.medium}
                  isLight={true}
                />
              </div>
            </div>
            <div className="block input">
              <Text variant={TextVariants.h3}>Visits</Text>
              <Input />
            </div>
            <div className="block input">
              <Text variant={TextVariants.h3}>Referrals</Text>
              <Input />
            </div>
            <div className="block input">
              <Text variant={TextVariants.h3}>Registrations</Text>
              <Input />
            </div>
            <div className="block input">
              <Text variant={TextVariants.h3}>Total earnings</Text>
              <Input />
            </div>
            <div className="block">
              <Text variant={TextVariants.h3}>Offer</Text>
              <div>
                <Input />
                <Button
                  text="Claim Earnings "
                  variant={ButtonVariants.blue}
                  size={ButtonSizeVariants.medium}
                  isLight={true}
                />
              </div>
            </div>
            <div className="block">
              {/* Table, нужны написать новый вариант - RowAffiliates */}
            </div>
          </div>
          <div className="affiliates-logo">
            <SvgIcon src={IconsVariants.Logo} size={60} />
            <Text variant={TextVariants.h3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              duis interdum non tellus. Posuere ipsum mi ut dolor sem tristique.
              Elementum neque, eget semper ornare. Quis gravida sed id urna
              senectus vulputate at tempor dolor.{" "}
            </Text>
          </div>
          <div className="block rewards">
            {Rewards.map((item, index) => (
              <div key={index} className="reward">
                <div className="for-svg">
                  <div>
                    <SvgIcon
                      size={40}
                      color={ColorSvgVariants.white}
                      src={item.icon}
                    />
                  </div>
                </div>
                <div className="info">
                  <Text variant={TextVariants.h3}>{item.title}</Text>
                  <Text variant={TextVariants.h1}>{item.info}</Text>
                </div>
              </div>
            ))}
          </div>
          <div className="invite">
            <Text variant={TextVariants.h1}>
              Share my <Text variant={TextVariants.h1}>referral</Text> link and
              invitation code to social network
            </Text>
            <div className="referals">
              <img src={ImagesVariants.Affiliates_friends} alt="friends" />
              <div className="info">
                <Text variant={TextVariants.h1}>
                  invite friends
                  <Text variant={TextVariants.h1}> to my referral now</Text>
                </Text>
              </div>
              <div className="socials">
                {Socials.map((icon, index) => (
                  <div key={index}>
                    <SvgIcon src={icon} size={50} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliates;
