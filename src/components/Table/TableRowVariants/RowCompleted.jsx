import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

const RowCompleted = ({ item }) => {
  return (
    <>
      <div className="table-row-cell-1">
        <Text variant={TextVariants.h2_medium}>{item.row.name}</Text>
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.h2_medium}>{item.row.value}</Text>
      </div>
    </>
  );
};

export default RowCompleted;
