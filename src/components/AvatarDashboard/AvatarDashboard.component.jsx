import React from "react";
import classNames from "classnames";
import { CircleProgress } from "../CircleProgress";
import { Avatar } from "../Avatar";
import {
  AvatarVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Text } from "../Text";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { debounce } from "../../helpers/helpers";
import { useLayoutEffect } from "react";

export const AvatarDashboardComponent = ({ progress, src, className }) => {
  const AvatarDashboardClass = classNames("avatarDashboard", className);
  const [position, setPosition] = useState(0);
  const parent = useRef(null);
  const avatar = useRef(null);
  const shadow = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      setPosition(
        (parent.current.offsetWidth - avatar.current.offsetWidth) / 2
      );
    };
    updatePosition();

    window.addEventListener(
      "resize",
      function () {
        debounce(updatePosition(), 750);
      },
      true
    );

    return () => {
      window.removeEventListener(
        "resize",
        function () {
          debounce(updatePosition(), 750);
        },
        true
      );
    };
  }, []);

  useLayoutEffect(() => {
    avatar.current.style.left = `${position}px`;
    avatar.current.style.top = `${position}px`;
    shadow.current.style.left = `${position}px`;
    shadow.current.style.top = `${position}px`;
  }, [position]);

  return (
    <div className={AvatarDashboardClass}>
      <div ref={parent} style={{ position: "relative" }}>
        <CircleProgress value={progress} />
        <Avatar ref={avatar} src={src} variant={AvatarVariants.lg} />
        <div ref={shadow} className="avatar_shadow">
          <Text variant={TextVariants.h3}>NEW</Text>
        </div>
      </div>
      <Text variant={TextVariants.h5_regular}>{`$${progress}/100`}</Text>
    </div>
  );
};

AvatarDashboardComponent.displayName = "Avatar";
