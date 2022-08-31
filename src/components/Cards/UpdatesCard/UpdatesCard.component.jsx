import React from "react";
import classNames from "classnames";

import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Text } from "../../Text";

export const UpdatesCardComponent = ({ item, status, className }) => {
  const UpdatesCardClass = classNames("updates-card", "block", className);

  const TextStatusMap = {
    new: "New service",
    enabled: "Service enabled",
    decreased: `Decreased from $${item.prevValue} to $${item.currentValue}`,
    increased: `Increased from $${item.prevValue} to $${item.currentValue}`,
  };

  return (
    <div className={UpdatesCardClass}>
      <div className="info">
        <div className="rows">
          <div>
            <Text variant={TextVariants.subtitle_medium}>Order ID</Text>
          </div>
          <div>
            <Text variant={TextVariants.subtitle_medium}>Service</Text>
          </div>
          <div>
            <Text variant={TextVariants.subtitle_medium}>Date</Text>
          </div>
        </div>
        <div className="separator"></div>
        <div className="values">
          <div>
            <Text variant={TextVariants.h5}>{item.id}</Text>
          </div>
          <div>
            <Text variant={TextVariants.h5}>{item.service}</Text>
          </div>
          <div>
            <Text variant={TextVariants.subtitle_medium}>{item.date}</Text>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className={`status-${status}`}>
          <Text variant={TextVariants.subtitle_medium}>
            {TextStatusMap[status]}
          </Text>
        </div>
        <Button
          text="Purchase"
          icon={IconsVariants.Purchase}
          variant={ButtonVariants.purchase}
          size={ButtonSizeVariants.small}
        />
      </div>
    </div>
  );
};

UpdatesCardComponent.displayName = "UpdatesCard";
