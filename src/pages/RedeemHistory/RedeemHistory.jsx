import React from "react";
import { Text } from "../../components/Text";
import {
  TextVariants,
  TableVariants,
} from "../../constants/VariantsOfComponents";
import { RedeemColumnInfo, RedeemInfo } from "../../constants/constants";

import { Table } from "../../components/Table";

const RedeemHistory = () => {
  return (
    <>
      <div className="redeem-history">
        <Text variant={TextVariants.h4}>
          <Text>Dashboard -</Text> Redeem history
        </Text>
        <div className="redeem-content">
          <Text variant={TextVariants.h1_medium}>Redeem history</Text>
          <div className="block">
            <Table
              variant={TableVariants.Redeem}
              columnNames={RedeemColumnInfo}
              data={RedeemInfo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RedeemHistory;
