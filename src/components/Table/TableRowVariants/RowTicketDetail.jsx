import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

const RowTicketDetail = ({ item }) => {
  return (
    <>
      <div className="table-row-cell-1">
        <Text variant={TextVariants.h2}>{item.subject}</Text>
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.h2}>{item.id}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.h2}>{item.request}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.h2}>{item.response}</Text>
      </div>
      <div className="table-row-cell-5">
        <Text variant={TextVariants.h2}>{item.status}</Text>
      </div>
    </>
  );
};

export default RowTicketDetail;
