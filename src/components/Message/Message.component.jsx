import React from "react";
import { useState } from "react";
import classNames from "classnames";

import {
  AvatarVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Avatar } from "../Avatar";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

import { useProfileInfoSelector } from "../../store/Profile/ProfileInfo/useProfileInfo";

export const MessageComponent = ({ message, isYourMessage, className }) => {
  const { img } = useProfileInfoSelector();
  const MessageClass = classNames(
    "message-container",
    { "flex-reverse": isYourMessage },
    className
  );
  const ArrowClass = classNames("arrow", {
    "arrow-right": isYourMessage,
    "arrow-left": !isYourMessage,
  });
  const [date] = useState(new Date(message.date));

  return (
    <div className={MessageClass}>
      {isYourMessage ? (
        <div className="message-avatar">
          <Avatar variant={AvatarVariants.sm} src={img} />
        </div>
      ) : (
        <div className="message-avatar">
          <div className="avatar avatar_variant_small support-avatar">
            <Text variant={TextVariants.h1}>S</Text>
          </div>
        </div>
      )}
      <div className="message">
        <SvgIcon
          className={ArrowClass}
          size={40}
          src={
            isYourMessage
              ? IconsVariants.Arrow_tooltip_left
              : IconsVariants.Arrow_tooltip_right
          }
          rotate={isYourMessage ? "90" : "270"}
        />
        <Text variant={TextVariants.h4}>{message.text}</Text>
        <Text className="time" variant={TextVariants.h4_regular}>
          {date.getHours().toString().padStart(2, "0")}:
          {date.getMinutes().toString().padStart(2, "0")}
        </Text>
      </div>
    </div>
  );
};

MessageComponent.displayName = "Tooltip";
