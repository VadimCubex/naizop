import React from "react";

import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Text } from "../../Text";

const RowPaymentDownload = ({ item }) => {
  return (
    <>
      <div className="table-row-cell-1">
        <Text variant={TextVariants.h5}>{item.row.id}</Text>
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.h5}>{item.row.date}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.h5}>{item.row.method}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.h5}>$ {item.row.amount}</Text>
      </div>
      <div className="table-row-cell-5">
        <Button
          variant={ButtonVariants.side}
          size={ButtonSizeVariants.small}
          icon={IconsVariants.Download}
        />
      </div>
    </>
  );
};

export default RowPaymentDownload;
