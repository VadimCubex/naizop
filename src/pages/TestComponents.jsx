import React from "react";
import { useState } from "react";

import { Accordion } from "components/Accordion";
import { Avatar } from "components/Avatar";
import { AvatarDashboard } from "components/AvatarDashboard";
import { Button } from "components/Button";
import { AccountCard } from "components/Cards";
import { CircleProgress } from "components/CircleProgress";
import { Input } from "components/Input";
import { Number } from "components/Number";
import { ProgressGradient } from "components/ProgressGradient";
import { Radio } from "components/Radio";
import { Select } from "components/Select";
import { SvgIcon } from "components/SvgIcon";
import { Text } from "components/Text";
import {
  AccountCardVariants,
  AvatarVariants,
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  ImagesVariants,
  NumberVariants,
  SelectOptionVariants,
  TextVariants,
} from "../constants/VariantsOfComponents";

const TestComponents = () => {
  const [gender, setGender] = useState("male");
  const [tooltip] = useState(
    "24/7 Ticket Support (customers who have spent $100 or more) will automatically unlock 24/7 ticket support. You will know you have achieved this status when the Gold coloured bar has been activated."
  );
  const [FAQ] = useState([
    "Partial status is when we partially refund the remains of an order.",
    "Sometimes we are unable to deliver a full order, so we refund you the remaining undelivered amount",
    "Example: You bought an order with a quantity of 1000 are charged $1, let's say we delivered 900 and the remaining 100 we couldn't deliver, we will then 'Partialy Refund' the order and reimburse you the remaining $100 [$0.10 in this example]. The funds will be added to your account balance account balance.",
  ]);
  const [options1] = useState([
    {
      title: "Instagram Followers1",
      badge: "Not Guaranteed",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers2",
      badge: "Not Guaranteed",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers3",
      badge: "Not Guaranteed",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers4",
      badge: "Not Guaranteed",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers5",
      badge: "Not Guaranteed",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers6",
      badge: "Not Guaranteed",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers7",
      badge: "Not Guaranteed",
      icon: IconsVariants.Instagram_color,
    },
  ]);
  const [options2] = useState([
    {
      title: "Instagram Followers [Cheapest - 3K Day]",
      price: "0.08",
      count: "1.000",
      recommended: true,
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers [Cheapest - 3K Day]",
      price: "0.08",
      count: "1.000",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers [Cheapest - 3K Day]",
      price: "0.08",
      count: "1.000",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers [Cheapest - 3K Day]",
      price: "0.08",
      count: "1.000",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers [Cheapest - 3K Day]",
      price: "0.08",
      count: "1.000",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers [Cheapest - 3K Day]",
      price: "0.08",
      count: "1.000",
      icon: IconsVariants.Instagram_color,
    },
    {
      title: "Instagram Followers [Cheapest - 3K Day]",
      price: "0.08",
      count: "1.000",
      icon: IconsVariants.Instagram_color,
    },
  ]);
  const [selected, setSelected] = useState(options1[0]);
  const [selected1, setSelected1] = useState(options2[0]);
  return (
    <div className="App" style={{ backgroundColor: "#343C44" }}>
      <ProgressGradient />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "10px",
        }}
      >
        <Text variant={TextVariants.h1}>Vadim 1</Text>
        <SvgIcon src={IconsVariants.Instagram_color} />

        <Button
          variant={ButtonVariants.default}
          width="full"
          className="button_logout"
          size={ButtonSizeVariants.extra_large}
          text="Click me!"
          icon={IconsVariants.Logout}
          iconPosition="right"
        ></Button>
        <Button
          variant={ButtonVariants.crypto}
          size={ButtonSizeVariants.large}
          text="Click me!"
          icon={IconsVariants.Logout}
          iconPosition="right"
        ></Button>
        <Button
          variant={ButtonVariants.crypto}
          size={ButtonSizeVariants.large}
          isLight={true}
          text="Click me!"
          icon={IconsVariants.Logout}
          iconPosition="right"
        ></Button>
        <Button
          variant={ButtonVariants.blue}
          size={ButtonSizeVariants.medium}
          text="Click me!"
          icon={IconsVariants.Logout}
          iconPosition="right"
        ></Button>
        <Button
          variant={ButtonVariants.blue}
          size={ButtonSizeVariants.medium}
          isLight={true}
          text="Click me!"
          icon={IconsVariants.Logout}
          iconPosition="right"
        ></Button>
        <Button
          variant={ButtonVariants.yellow}
          size={ButtonSizeVariants.small}
          text="Click me!"
          iconPosition="right"
        ></Button>
        <Button
          variant={ButtonVariants.default}
          size={ButtonSizeVariants.small}
          icon={IconsVariants.Show}
          iconPosition="right"
        ></Button>
        <Button
          variant={ButtonVariants.purchase}
          size={ButtonSizeVariants.small}
          text="Purchase"
        ></Button>

        <Avatar variant={AvatarVariants.lg} src={ImagesVariants.profile} />
        <Avatar variant={AvatarVariants.md} src={ImagesVariants.profile} />
        <Avatar variant={AvatarVariants.sm} src={ImagesVariants.profile} />

        <Radio
          value="male"
          name="gender"
          toChecked={gender}
          onChange={(value) => {
            setGender(value);
          }}
        />
        <Radio
          value="female"
          name="gender"
          toChecked={gender}
          onChange={(value) => {
            setGender(value);
          }}
        />

        <Number variant={NumberVariants.lg} number="1" />
        <Number variant={NumberVariants.sm} number="8" />

        <div
          style={{
            display: "flex",
            rowGap: "20px",
            margin: "25px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <AccountCard
            variant={AccountCardVariants.lg}
            text="24/7 Ticket Support"
          />
          <AccountCard
            variant={AccountCardVariants.lg}
            tooltip={tooltip}
            text="24/7 Ticket Support"
          />
          <AccountCard
            variant={AccountCardVariants.lg}
            text="24/7 Ticket Support"
          />
          <AccountCard
            variant={AccountCardVariants.lg}
            tooltip={tooltip}
            text="24/7 Ticket Support"
          />
          <AccountCard
            variant={AccountCardVariants.lg}
            text="24/7 Ticket Support"
          />
          <AccountCard
            variant={AccountCardVariants.lg}
            tooltip={tooltip}
            text="24/7 Ticket Support"
          />
          <AccountCard
            variant={AccountCardVariants.lg}
            text="24/7 Ticket Support"
          />
          <AccountCard
            variant={AccountCardVariants.lg}
            text="24/7 Ticket Support"
          />
        </div>

        <CircleProgress value={100} />

        <AvatarDashboard progress={75} src={ImagesVariants.profile} />

        <Accordion
          icon={IconsVariants.Instagram_color}
          title="Instagram Followers"
        >
          {FAQ.map((item, index) => (
            <Text key={index} variant={TextVariants.h5_regular}>
              {item}
            </Text>
          ))}
          {FAQ.map((item, index) => (
            <Text key={index} variant={TextVariants.h5_regular}>
              {item}
            </Text>
          ))}
          {FAQ.map((item, index) => (
            <Text key={index} variant={TextVariants.h5_regular}>
              {item}
            </Text>
          ))}
        </Accordion>
        <Accordion
          icon={IconsVariants.Instagram_color}
          title="Instagram Followers"
          badges={["Not Guaranteed", "12"]}
        >
          <Text variant={TextVariants.h5_regular}>123</Text>
        </Accordion>

        <Select
          options={options1}
          onClick={setSelected}
          variant={SelectOptionVariants.newOrderWithoutDeteil}
          selected={selected}
        />

        <Select
          options={options2}
          onClick={setSelected1}
          variant={SelectOptionVariants.newOrderWithDetail}
          selected={selected1}
        />

        <Input placeholder="Enter ID..." />
      </div>
    </div>
  );
};

export default TestComponents;
