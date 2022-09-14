import React from "react";
import { Link } from "react-router-dom";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

const RowCompleted = ({ item }) => {
  return (
    <>
      <div className="table-row-cell-1">
        <Text variant={TextVariants.h2_medium}>{item.row.name}</Text>
      </div>
      <div className="table-row-cell-2">
        {item.row?.value && (
          <Text variant={TextVariants.h2_medium}>{item.row.value}</Text>
        )}
        {item.row?.link && (
          <Link to={"/track-order"}>
            <Text variant={TextVariants.h2_medium}>{item.row.link}</Text>
          </Link>
        )}
      </div>
    </>
  );
};

export default RowCompleted;
