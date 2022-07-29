import React from "react";

import {
  StatusVariants,
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Status } from "../Status";
import { Text } from "../Text";

const TableRow = ({ variant, value, index }) => {
  const RowTextVariantMap = {
    id: TextVariants.h5,
    points: TextVariants.h5,
    date: TextVariants.h5,
    amount: TextVariants.h5,
    rank: TextVariants.h5,
    count: TextVariants.h5,
    section: TextVariants.h5,
    value: TextVariants.h5,
    service: TextVariants.h5,
    created: TextVariants.subtitle_medium,
    username: TextVariants.subtitle_medium,
    newPosts: TextVariants.h5,
    charge: TextVariants.h5,
    orders_date: TextVariants.subtitle_medium,
  };

  return (
    value[0] !== "refill" && (
      <div
        className={`table-row-cell${
          variant !== TableVariants.Ranks ? "-" + (index + 1) : ""
        }`}
      >
        {value[0] !== "status" ? (
          <Text variant={RowTextVariantMap[value[0]]}>{value[1]}</Text>
        ) : (
          <Status variant={StatusVariants[value[1]]} status={value[1]} />
        )}
      </div>
    )
  );
};

export default TableRow;
