import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

const RowRedeemHistory = ({ item }) => {
  return (
    <>
      <div className="table-row-cell-1">
        <Text variant={TextVariants.h5}>{item.row.id}</Text>
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.h5}>{item.row.points}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.h5}>{item.row.date}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.h5}>{item.row.amount}</Text>
      </div>
    </>
  );
};

export default RowRedeemHistory;
