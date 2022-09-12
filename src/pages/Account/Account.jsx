import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TooltipPortal } from "../../components/Portal";
import { Radio } from "../../components/Radio";
import { Select } from "../../components/Select";
import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import { Tooltip } from "../../components/Tooltip";
import { AvatarsForSelect, TimeZonesForSelect } from "./constants";
import { ProfileInfo } from "../../constants/constants";
import {
  AvatarVariants,
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

import useTooltip from "../../hooks/useTooltip";

const Account = () => {
  const [gender, setGender] = useState("male");
  const [avatar, setAvatar] = useState(ProfileInfo.img);
  const [selected, setSelected] = useState(TimeZonesForSelect[0]);
  const {
    coords,
    isShowTooltip,
    tooltipPosition,
    tooltipSvg,
    TooltipWidth,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  } = useTooltip();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="account">
        <Text variant={TextVariants.h1_medium}>Account</Text>
        <div className="account-container">
          <div className="account-categories">
            <div className="block avatars">
              <div className="avatar-current">
                <Text variant={TextVariants.h3}>Your avatar</Text>
                <Avatar src={avatar} variant={AvatarVariants.lg} />
              </div>
              <div className="avatar-select-container">
                <div className="avatar-select">
                  <div className="avatar-account">
                    <div className="add-new-avatar">
                      <SvgIcon
                        src={IconsVariants.Plus_stroke}
                        size={30}
                        color={ColorSvgVariants.yellow}
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => setAvatar(ProfileInfo.img)}
                    className="avatar-account"
                  >
                    <div
                      className={`avatar-border ${
                        avatar === ProfileInfo.img ? "active" : ""
                      }`}
                    >
                      <Avatar
                        src={ProfileInfo.img}
                        variant={AvatarVariants.md}
                      />
                    </div>
                  </div>
                </div>
                <div className="avatar-imgs">
                  {AvatarsForSelect.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setAvatar(item)}
                      className="avatar-account"
                    >
                      <div
                        className={`avatar-border ${
                          avatar === item ? "active" : ""
                        }`}
                      >
                        <Avatar src={item} variant={AvatarVariants.md} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="block gender">
              <Text variant={TextVariants.h3}>Gender</Text>
              <div className="select-gender">
                <Radio
                  value="male"
                  toChecked={gender}
                  onChange={(value) => {
                    setGender(value);
                  }}
                  name="gender"
                  text="MALE"
                />
                <Radio
                  value="female"
                  toChecked={gender}
                  onChange={(value) => {
                    setGender(value);
                  }}
                  name="gender"
                  text="FEMALE"
                />
                <Radio
                  toChecked={gender}
                  onChange={(value) => {
                    setGender(value);
                  }}
                  value="other"
                  name="gender"
                  text="OTHER"
                />
              </div>
            </div>
          </div>
          <div className="account-categories">
            <div className="block password">
              <Text variant={TextVariants.h3}>Password</Text>
              <div className="password-input">
                <Text variant={TextVariants.h3}>Current password</Text>
                <Input
                  type="password"
                  placeholder="Enter current password..."
                />
              </div>
              <div className="password-input">
                <Text variant={TextVariants.h3}>New password</Text>
                <Input type="password" placeholder="Enter new password..." />
              </div>
              <div className="password-input">
                <Text variant={TextVariants.h3}>Confirm new password</Text>
                <Input
                  type="password"
                  placeholder="Enter confirm new password..."
                />
              </div>
              <Button
                width="full"
                variant={ButtonVariants.blue}
                text="Save"
                isLight={true}
              />
            </div>
            <div className="block time-zone-api-key">
              <Text variant={TextVariants.h3}>Time zone & API Key</Text>
              <div className="inputs-container">
                <div>
                  <div className="time-api-input">
                    <Text variant={TextVariants.h3}>Time zone</Text>
                    <Select
                      value={selected}
                      setValue={setSelected}
                      variant={SelectOptionVariants.Default}
                      options={TimeZonesForSelect}
                    />
                  </div>
                  <Button
                    width="full"
                    variant={ButtonVariants.blue}
                    text="Save"
                    isLight={true}
                  />
                </div>
                <div>
                  <div className="time-api-input">
                    <Text variant={TextVariants.h3}>API Key</Text>
                    <TooltipPortal>
                      <Tooltip
                        width={TooltipWidth}
                        coords={coords}
                        arrowPosition={tooltipPosition}
                        isShow={isShowTooltip}
                        text="The key is hidden for security reasons"
                      />
                    </TooltipPortal>
                    <Input
                      type="password"
                      rightSide={
                        <div
                          ref={tooltipSvg}
                          onTouchEnd={handleClick}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <SvgIcon
                            src={IconsVariants.Question}
                            size={24}
                            color={ColorSvgVariants.white}
                          />
                        </div>
                      }
                    />
                  </div>
                  <Button
                    width="full"
                    variant={ButtonVariants.blue}
                    text="Generate new"
                    isLight={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
