import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

const RowServiceDetail = ({ item }) => {
  return (
    <>
      <div className="table-row-cell-1">
        <Text variant={TextVariants.h5}>{item.row.section}</Text>
      </div>
      <div className="table-row-cell-2">
        {Array.isArray(item.row.value) ? (
          item.row.value.map((element, index) => (
            <p key={index}>
              <Text variant={TextVariants.h5}>{element}</Text>
            </p>
          ))
        ) : (
          <Text variant={TextVariants.h5}>{item.row.value}</Text>
        )}
      </div>
    </>
  );
};

export default RowServiceDetail;
