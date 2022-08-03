import React from "react";
import { useState } from "react";
import classNames from "classnames";

import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const ServiceListComponent = ({ title, list }) => {
  const ServiceListClass = classNames("service-list");
  const [openListModal, setOpenListModal] = useState(false);

  return (
    <div className={ServiceListClass}>
      <Text variant={TextVariants.h1}>{title}</Text>
      {list.slice(0, 5).map((item, index) => (
        <div key={index}>
          <hr className="separator" />
          <div className="service-item cursor-pointer">
            <div className="service-info">
              <Text variant={TextVariants.h5}>{item.title}</Text>
              <Text variant={TextVariants.h5}>
                <Text>{`$${item.price}`}</Text>
                <Text>{`/${item.count}`}</Text>
              </Text>
            </div>
            <Button
              variant={ButtonVariants.purchase}
              size={ButtonSizeVariants.small}
              text="Purchase"
            />
          </div>
        </div>
      ))}
      <hr className="show-separator" />
      <div
        onClick={() => {
          setOpenListModal(true);
        }}
        className="show-all cursor-pointer"
      >
        <Text variant={TextVariants.h4}>Show the entire list</Text>
        <SvgIcon
          src={IconsVariants.DropDown_arrow_fill}
          size={8}
          rotate={openListModal ? "180" : "0"}
        />
      </div>
      <Modal
        className="service-list-modal"
        title={title}
        isOpen={openListModal}
        onClick={() => {
          setOpenListModal(false);
        }}
      >
        {list.map((item, index) => (
          <div key={index}>
            <hr className="separator" />
            <div className="service-item cursor-pointer">
              <div className="service-info">
                <Text variant={TextVariants.h5}>{item.title}</Text>
                <Text variant={TextVariants.h5}>
                  <Text>{`$${item.price}`}</Text>
                  <Text>{`/${item.count}`}</Text>
                </Text>
              </div>
              <Button
                variant={ButtonVariants.purchase}
                size={ButtonSizeVariants.small}
                text="Purchase"
              />
            </div>
          </div>
        ))}
      </Modal>
      {/* <Modal
        className="table-modal"
        title="Order Information"
        isOpen={openModal}
        onClick={() => {
          setOpenModal(false);
        }}
      ></Modal> */}
    </div>
  );
};

ServiceListComponent.displayName = "ServiceList";
