import React from "react";
import { useState } from "react";
import { Table } from "..";

import { OrdersModalColumnInfo } from "../../../pages/Orders/constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  TableVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Modal } from "../../Modal";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

const RowService = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(item.favorite);

  return (
    <>
      <div className="table-row-cell-1">
        <div>
          <SvgIcon
            className={isFavorite ? "active" : ""}
            src={IconsVariants.Favorites_stroke}
            onClick={() => {
              setIsFavorite(!isFavorite);
            }}
            size={16}
            color={ColorSvgVariants.white}
          />
        </div>
        <hr className="cell-1-separator" />
        <Text variant={TextVariants.h5}>{item.row.id}</Text>
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.h5}>{item.row.service}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.h5}>{`$${item.row.price.value}`}</Text>
        <Text variant={TextVariants.h5}>{`/${item.row.price.count}`}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.h5}>{item.row.avarageTime}</Text>
      </div>
      <div className="table-row-cell-5">
        <Text variant={TextVariants.h5}>{item.row.minMaxOrder}</Text>
      </div>
      <div className="table-row-cell-6">
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
          variant={ButtonVariants.default}
          icon={IconsVariants.Show}
          size={ButtonSizeVariants.small}
        />
        <Button
          text="Purchase"
          variant={ButtonVariants.purchase}
          size={ButtonSizeVariants.small}
        />
      </div>
      <Modal
        className="table-serviceDetail-modal"
        title="Service details"
        isOpen={openModal}
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <Table
          variant={TableVariants.Service_detail}
          columnNames={OrdersModalColumnInfo}
          data={item.modal}
        />
      </Modal>
    </>
  );
};

export default RowService;
