import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { RedeemColumnInfo, RedeemTable } from "./constants";
import {
  TextVariants,
  TableVariants,
} from "../../constants/VariantsOfComponents";

const RedeemHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="redeem-history">
        <Text variant={TextVariants.h4}>
          <Link to="/profile">
            <Text>VIP Rewards -</Text>
          </Link>{" "}
          Redeem history
        </Text>
        <div className="redeem-content">
          <Text variant={TextVariants.h1_medium}>Redeem history</Text>
          <div className="block">
            <Table
              variant={TableVariants.Redeem}
              columnNames={RedeemColumnInfo}
              data={RedeemTable}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RedeemHistory;
