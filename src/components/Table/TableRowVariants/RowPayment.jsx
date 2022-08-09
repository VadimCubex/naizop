import React from "react";

import {
  ButtonSizeVariants,
  ButtonVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Text } from "../../Text";

const RowPayment = ({ item }) => {
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
      <div className="table-row-cell-5">
        {item.row.action ? (
          <Button
            text="View"
            variant={ButtonVariants.purchase}
            size={ButtonSizeVariants.small}
          />
        ) : (
          <Text variant={TextVariants.h5}></Text>
        )}
      </div>
    </>
  );
};

export default RowPayment;
