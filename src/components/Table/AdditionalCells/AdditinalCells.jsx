import React from "react";

import CellsForOrders from "./CellsForOrders";
import CellsForSubscription from "./CellsForSubscription";
import { TableVariants } from "../../../constants/VariantsOfComponents";

const AdditinalCells = ({ variant, item }) => {
  const TableVariantMap = {
    [TableVariants.Subscriptions]: <CellsForSubscription item={item} />,
    [TableVariants.Orders]: <CellsForOrders item={item} />,
  };

  return <>{TableVariantMap[variant]}</>;
};

export default AdditinalCells;
