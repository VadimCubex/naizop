import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

const RowAffiliates = ({ item }) => {
  return (
    <>
      <div className="table-row-cell-1">
        <Text variant={TextVariants.h4}>{item.row.user}</Text>
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.h4}>{item.row.rate}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.h4}>{item.row.payout}</Text>
      </div>
    </>
  );
};

export default RowAffiliates;
