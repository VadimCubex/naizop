import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { PaymentHistoryColumnInfo, PaymentTable } from "./constants";
import {
  TextVariants,
  TableVariants,
} from "../../constants/VariantsOfComponents";

const PaymentHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="payment-history">
        <Text variant={TextVariants.h4}>
          <Link to="/profile/add-funds">
            <Text>Add funds -</Text>
          </Link>{" "}
          Payment history
        </Text>
        <div className="payment-content">
          <Text variant={TextVariants.h1_medium}>Payment history</Text>
          <div className="block">
            <Table
              variant={TableVariants.Payment}
              columnNames={PaymentHistoryColumnInfo}
              data={PaymentTable}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
