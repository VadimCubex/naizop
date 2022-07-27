import React from "react";
import { useEffect } from "react";

import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import {
  FilterSubscriptions,
  RedeemColumnInfo,
  RedeemInfo,
} from "../../constants/constants";
import {
  TextVariants,
  TableVariants,
} from "../../constants/VariantsOfComponents";

const Subscriptions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="subscriptions">
        <Filter options={FilterSubscriptions} />
        <Text variant={TextVariants.h1_medium}>Subscriptions</Text>
        <div className="block">
          <Table
            variant={TableVariants.Redeem}
            columnNames={RedeemColumnInfo}
            data={RedeemInfo}
          />
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
