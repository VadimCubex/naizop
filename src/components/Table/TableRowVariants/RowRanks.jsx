import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { numberWithCommas } from "../../../helpers/helpers";
import { Text } from "../../Text";

const RowRanks = ({ item }) => {
  return (
    <>
      <div className="table-row-cell">
        <Text variant={TextVariants.h5}>
          {item.row.section || item.row.rank}
        </Text>
      </div>
      <div className="table-row-cell">
        <Text variant={TextVariants.h5}>
          {item.row.value || `$${numberWithCommas(item.row.count)}`}
        </Text>
      </div>
    </>
  );
};

export default RowRanks;
