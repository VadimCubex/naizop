import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import {
  FilterSubscriptions,
  SubscriptionColumnInfo,
  SubscriptionTable,
} from "./constants";
import {
  TextVariants,
  TableVariants,
  ButtonVariants,
  ButtonSizeVariants,
} from "../../constants/VariantsOfComponents";

const Subscriptions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="subscriptions">
        <Filter options={FilterSubscriptions} />
        <div className="text-with-button">
          <Text variant={TextVariants.h1_medium}>Subscriptions</Text>
          <Button
            onClick={() => navigate("/profile/track-your-order")}
            isLight={true}
            text="Track your order"
            variant={ButtonVariants.yellow}
            size={ButtonSizeVariants.medium}
            width="full"
          />
        </div>
        <div className="block">
          <Table
            variant={TableVariants.Subscriptions}
            columnNames={SubscriptionColumnInfo}
            data={SubscriptionTable}
          />
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
