import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ButtonSizeVariants,
  ButtonVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Text } from "../../Text";

import { useSupportActions } from "../../../store/Support/useSupportActions";

const RowTickets = ({ item }) => {
  const navigate = useNavigate();
  const { setTicket } = useSupportActions();

  const handleClick = (ticket) => {
    setTicket(ticket);
    navigate("/profile/support/ticket");
  };

  return (
    <>
      <div className="table-row-cell-1">
        <Text variant={TextVariants.h5}>{item.row.id}</Text>
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.h5}>
          {item.row.subject}
          {item.row?.rank && `- ${item.row.rank}`}
          {item.row.isPriority && "- PRIORITY"}
        </Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.h5}>{item.row.request}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.h5}>{item.row.status}</Text>
      </div>
      <div className="table-row-cell-5">
        <Text variant={TextVariants.h5}>{item.row.lastUpdate}</Text>
      </div>
      <div className="table-row-cell-6">
        <Button
          onClick={() => handleClick(item.row)}
          text="View ticket"
          variant={ButtonVariants.purchase}
          size={ButtonSizeVariants.small}
        />
      </div>
    </>
  );
};

export default RowTickets;
