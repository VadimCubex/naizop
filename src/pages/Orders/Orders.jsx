import React from "react";
import { useEffect } from "react";

import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { FilterOrders, OrdersColumnInfo, OrderTable } from "./constants";
import {
  TextVariants,
  TableVariants,
} from "../../constants/VariantsOfComponents";

const Orders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="orders">
        <Filter options={FilterOrders} />
        <Text variant={TextVariants.h1_medium}>Orders</Text>
        <div className="block">
          <Table
            variant={TableVariants.Orders}
            columnNames={OrdersColumnInfo}
            data={OrderTable}
          />
        </div>
      </div>
    </>
  );
};

export default Orders;
