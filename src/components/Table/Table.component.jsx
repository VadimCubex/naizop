import React from "react";
import { useState } from "react";
import { Table } from ".";
import classNames from "classnames";

import { SubscriptionModalColumnInfo } from "../../constants/constants";
import {
  ButtonVariants,
  IconsVariants,
  TableVariants,
  TextVariants,
  StatusVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Status } from "../Status";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const TableComponent = ({ data, columnNames, variant, className }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const TableClass = classNames(
    "table",
    {
      [`table-variant-${variant}`]: variant,
    },
    className
  );

  return (
    <div className={TableClass}>
      <div className="table-header">
        {columnNames.map((item, index) => (
          <div
            className={`table-column-cell${
              variant !== TableVariants.Ranks ? "-" + (index + 1) : ""
            }`}
            key={index}
          >
            <Text variant={TextVariants.subtitle_medium}>{item}</Text>
          </div>
        ))}
      </div>
      <hr className="table-hr" />
      <div className="table-separators">
        {columnNames.map((item, index) => (
          <div
            className={`table-column-cell${
              variant !== TableVariants.Ranks ? "-" + (index + 1) : ""
            }`}
            key={index}
          >
            <hr
              style={
                index !== columnNames.length - 1
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            />
          </div>
        ))}
      </div>
      <div className="table-content">
        {data.map((item, index) => (
          <div className="table-row" key={index}>
            {index === 0 ? null : <div className="table-row-border" />}
            <div className="table-row-content">
              {Object.entries(item.row).map((value, index_value) => (
                <div
                  className={`table-row-cell${
                    variant !== TableVariants.Ranks
                      ? "-" + (index_value + 1)
                      : ""
                  }`}
                  key={index_value}
                >
                  {value[0] !== "status" ? (
                    <Text variant={TextVariants.h5}>{value[1]}</Text>
                  ) : (
                    <Status
                      variant={StatusVariants[value[1]]}
                      status={value[1]}
                    />
                  )}
                </div>
              ))}
              {variant === TableVariants.Subscriptions && (
                <>
                  <div className="table-row-cell-7">
                    <Button
                      onClick={() => {
                        setOpenModal(true);
                        setModalItem(item.modal);
                      }}
                      variant={ButtonVariants.default}
                      icon={IconsVariants.Info}
                    />
                  </div>
                  <div className="table-row-cell-8">
                    <Button
                      variant={ButtonVariants.default}
                      icon={IconsVariants.Reorder}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="table-small-row-content">
              <div className="table-small-header">
                {columnNames.map((item, index) => (
                  <div
                    className={`table-column-cell${
                      variant !== TableVariants.Ranks ? "-" + (index + 1) : ""
                    }`}
                    key={index}
                  >
                    <Text variant={TextVariants.subtitle_medium}>{item}</Text>
                  </div>
                ))}
              </div>
              <div className="table-small-row">
                {Object.entries(item.row).map((value, index_value) => (
                  <div
                    className={`table-row-cell${
                      variant !== TableVariants.Ranks
                        ? "-" + (index_value + 1)
                        : ""
                    }`}
                    key={index_value}
                  >
                    {value[0] !== "status" ? (
                      <Text variant={TextVariants.h5}>{value[1]}</Text>
                    ) : (
                      <Status
                        variant={StatusVariants[value[1]]}
                        status={value[1]}
                      />
                    )}
                  </div>
                ))}
                {variant === TableVariants.Subscriptions && (
                  <>
                    <div className="table-row-cell-7">
                      <Button
                        onClick={() => {
                          setOpenModal(true);
                          setModalItem(item.modal);
                        }}
                        variant={ButtonVariants.default}
                        icon={IconsVariants.Info}
                      />
                    </div>
                    <div className="table-row-cell-8">
                      <Button
                        variant={ButtonVariants.default}
                        icon={IconsVariants.Reorder}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {variant === TableVariants.Subscriptions && (
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
            data={modalItem}
          />
          <div className="button-modal">
            <Button
              isLight={true}
              variant={ButtonVariants.blue}
              text="Support"
            />
          </div>
          <div className="modal-hr"></div>
          <div className="modal-trustpilot">
            <div>
              <Text variant={TextVariants.h4}>Excellent</Text>
              <div className="trustpilot-stars">
                {[...Array(5)].map((item, index) => (
                  <SvgIcon
                    key={index}
                    size={16}
                    src={IconsVariants.Trustpilot}
                  />
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
      )}
    </div>
  );
};

TableComponent.displayName = "Table";
