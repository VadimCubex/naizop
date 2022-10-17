import React from "react";

import RowAffiliates from "./RowAffiliates";
import RowCompleted from "./RowCompleted";
import RowOrders from "./RowOrders";
import RowPayment from "./RowPayment";
import RowPaymentDownload from "./RowPaymentDownload";
import RowRanks from "./RowRanks";
import RowRedeemHistory from "./RowRedeemHistory";
import RowService from "./RowService";
import RowServiceDetail from "./RowServiceDetail";
import RowSubscriptions from "./RowSubscriptions";
import RowTicketDetail from "./RowTicketDetail";
import RowTickets from "./RowTickets";
import { TableVariants } from "../../../constants/VariantsOfComponents";

const TableRow = ({ variant, item }) => {
  const RowVariantMap = {
    [TableVariants.Orders]: <RowOrders item={item} />,
    [TableVariants.Subscriptions]: <RowSubscriptions item={item} />,
    [TableVariants.Redeem]: <RowRedeemHistory item={item} />,
    [TableVariants.Ranks]: <RowRanks item={item} />,
    [TableVariants.Service]: <RowService item={item} />,
    [TableVariants.Service_detail]: <RowServiceDetail item={item} />,
    [TableVariants.Payment]: <RowPayment item={item} />,
    [TableVariants.PaymentDownload]: <RowPaymentDownload item={item} />,
    [TableVariants.Completed]: <RowCompleted item={item} />,
    [TableVariants.Affiliates]: <RowAffiliates item={item} />,
    [TableVariants.Tickets]: <RowTickets item={item} />,
    [TableVariants.TicketsDetail]: <RowTicketDetail item={item} />,
  };

  return <>{RowVariantMap[variant]}</>;
};

export default TableRow;
