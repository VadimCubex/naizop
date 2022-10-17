import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Button } from "../../components/Button";
import { HowItWorks } from "../../components/HowItWorks";
import { Input } from "../../components/Input";
import { SvgIcon } from "../../components/SvgIcon";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import {
  AffiliatesColumn,
  AffiliatesTableInfo,
  Joins,
  ReasonsImg,
  Rewards,
  Socials,
} from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  ImagesVariants,
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Affiliates = () => {
  const [code, setCode] = useState("");
  const [link, setLink] = useState("https://naizop.com/ref/495tt");
  const [visits, setVisits] = useState(0);
  const [referrals, setReferrals] = useState(0);
  const [registrations, setRegistrations] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="affiliates">
        <Text variant={TextVariants.h1_medium}>Affiliates</Text>
        <div className="affiliates-contant">
          <div className="affiliates-main">
            <div className="affiliates-tools-container">
              <HowItWorks />
              <div className="block input-affiliates">
                <Text variant={TextVariants.h3}>Set your referral code</Text>
                <div className="with-button">
                  <Input
                    placeholder="Enter code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <Button
                    width="full"
                    text="Set code"
                    variant={ButtonVariants.blue}
                    size={ButtonSizeVariants.medium}
                    isLight={true}
                  />
                </div>
              </div>
              <div className="block input-affiliates">
                <Text variant={TextVariants.h3}>Your link</Text>
                <div className="with-button">
                  <Input
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                  <Button
                    width="full"
                    text="Copy"
                    variant={ButtonVariants.blue}
                    size={ButtonSizeVariants.medium}
                    isLight={true}
                  />
                </div>
              </div>
              <div className="block input-affiliates">
                <Text variant={TextVariants.h3}>Visits</Text>
                <Input
                  rightSide={<Text variant={TextVariants.h5}>Users</Text>}
                  value={visits}
                  onChange={(e) => setVisits(e.target.value)}
                />
              </div>
              <div className="block input-affiliates">
                <Text variant={TextVariants.h3}>Referrals</Text>
                <Input
                  rightSide={<Text variant={TextVariants.h5}>Users</Text>}
                  value={referrals}
                  onChange={(e) => setReferrals(e.target.value)}
                />
              </div>
              <div className="block input-affiliates">
                <Text variant={TextVariants.h3}>Registrations</Text>
                <Input
                  rightSide={<Text variant={TextVariants.h5}>Users</Text>}
                  value={registrations}
                  onChange={(e) => setRegistrations(e.target.value)}
                />
              </div>
              <div className="block input-affiliates earnings">
                <Text variant={TextVariants.h3}>Total earnings</Text>
                <Input
                  value={earnings.toFixed(2)}
                  leftSide={<Text variant={TextVariants.h4}>$</Text>}
                  onChange={(e) => setEarnings(parseFloat(e.target.value))}
                />
              </div>
              <div className="block offer-container">
                <Text variant={TextVariants.h3}>Offer</Text>
                <div className="with-button">
                  <div className="offer">
                    <Text variant={TextVariants.h2_medium}>
                      Available earnings
                    </Text>
                    <Text variant={TextVariants.h1}>
                      ${earnings.toFixed(2)}
                    </Text>
                  </div>
                  <Button
                    width="full"
                    text="Claim Earnings "
                    variant={ButtonVariants.blue}
                    size={ButtonSizeVariants.medium}
                    isLight={true}
                  />
                </div>
              </div>
              <div className="block">
                <Table
                  variant={TableVariants.Affiliates}
                  columnNames={AffiliatesColumn}
                  data={AffiliatesTableInfo}
                />
              </div>
            </div>
            <div className="reasons">
              <div className="reasons-images">
                {ReasonsImg.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={"reason image" + (index + 1)} />
                  </div>
                ))}
              </div>
              <div className="joins">
                {Joins.map((item, index) => (
                  <div key={index} className="join">
                    <Text variant={TextVariants.h3_regular}>{index + 1}</Text>
                    <div>
                      <Text variant={TextVariants.h1}>{item.title}</Text>
                      <Text variant={TextVariants.h4_regular}>{item.info}</Text>
                    </div>
                  </div>
                ))}
              </div>
              <div className="promote">
                <Text variant={TextVariants.h2_medium}>
                  Invite Your Friends with your{" "}
                  <Text variant={TextVariants.h2}>referal link</Text> and you
                  will earn <Text variant={TextVariants.h2}>10%</Text> of the
                  money spent by your referrals for life!
                </Text>
              </div>
            </div>
          </div>
          <div className="affiliates-logo">
            <div>
              <SvgIcon src={IconsVariants.Logo} size={60} />
            </div>
            <Text variant={TextVariants.h3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              duis interdum non tellus. Posuere ipsum mi ut dolor sem tristique.
              Elementum neque, eget semper ornare. Quis gravida sed id urna
              senectus vulputate at tempor dolor.{" "}
            </Text>
          </div>
          <div className="block rewards">
            <Text variant={TextVariants.h1}>Rewards sent to-date</Text>
            <div>
              {Rewards.map((item, index) => (
                <div key={index} className="reward">
                  <div>
                    <div className="for-svg">
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
          </div>
          <div className="invite">
            <Text variant={TextVariants.h1}>
              Share my <Text variant={TextVariants.h1}>referral</Text> link and
              invitation code to social network
            </Text>
            <div className="referals">
              <img src={ImagesVariants.Affiliates_friends} alt="friends" />
              <div className="info">
                <Text variant={TextVariants.h1}>invite friends</Text>
                <Text variant={TextVariants.h1}> to my referral now</Text>
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
