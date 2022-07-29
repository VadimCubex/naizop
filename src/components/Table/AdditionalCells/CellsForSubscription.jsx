import React from "react";
import { useState } from "react";
import { Table } from "..";

import { SubscriptionModalColumnInfo } from "../../../pages/Subscriptions/constants";
import {
  ButtonVariants,
  IconsVariants,
  TableVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Modal } from "../../Modal";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

const CellsForSubscription = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="table-row-cell-7">
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
          variant={ButtonVariants.default}
          icon={IconsVariants.Info}
        />
      </div>
      <div className="table-row-cell-8">
        <Button variant={ButtonVariants.default} icon={IconsVariants.Reorder} />
      </div>
      <Modal
        className="table-modal"
        title="Order Information"
        isOpen={openModal}
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <Table
          variant={TableVariants.Ranks}
          columnNames={SubscriptionModalColumnInfo}
          data={item.modal}
        />
        <div className="button-modal">
          <Button isLight={true} variant={ButtonVariants.blue} text="Support" />
        </div>
        <div className="modal-hr"></div>
        <div className="modal-trustpilot">
          <div>
            <Text variant={TextVariants.h4}>Excellent</Text>
            <div className="trustpilot-stars">
              {[...Array(5)].map((item, index) => (
                <SvgIcon key={index} size={16} src={IconsVariants.Trustpilot} />
              ))}
            </div>
          </div>
          <div className="trustpilot-reviews">
            <Text variant={TextVariants.h4_regular}>
              <Text>456</Text> reviews on
            </Text>
            <div>
              <SvgIcon size={14} src={IconsVariants.Trustpilot} />
              <Text variant={TextVariants.h4}>Trustpilot</Text>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CellsForSubscription;
