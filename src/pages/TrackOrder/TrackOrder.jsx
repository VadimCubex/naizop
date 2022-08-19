import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import { Button } from "../../components/Button";
import { ProgressStatus } from "../../components/ProgressStatus";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import {
  TrackOrderColumnInfo,
  TrackOrderStatus,
  TrackOrderTable,
} from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const TrackOrder = () => {
  const [orderStatus, setOrderStatus] = useState(TrackOrderStatus.status);
  const [counter, setCounter] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    let new_index = 0;
    timer.current = setInterval(() => {
      if (new_index < 3) {
        new_index++;
        setOrderStatus({
          index: new_index,
          refunded: false,
          partial: false,
        });
      } else {
        new_index = 0;
        setOrderStatus({
          index: 0,
          refunded: false,
          partial: false,
        });
      }
    }, 2000);
  }, [counter]);

  return (
    <>
      <div className="track-order container">
        <Text variant={TextVariants.title}>Track your order</Text>
        <div className="track-order-background"></div>
        <div className="block">
          <div className="info">
            <div className="for-table">
              <Table
                columnNames={TrackOrderColumnInfo}
                data={TrackOrderTable}
                variant={TableVariants.Completed}
              />
            </div>
            {!orderStatus.partial && !orderStatus.refunded ? (
              <div className="timing">
                <Text variant={TextVariants.h2_medium}>
                  {TrackOrderStatus.when}
                </Text>
              </div>
            ) : null}
          </div>
          <div className="progress">
            <ProgressStatus status={orderStatus} />
          </div>
        </div>
        <div>
          <Text variant={TextVariants.h1}>For Test Order Status</Text>
          <div className="test">
            <Button
              onClick={() => {
                setOrderStatus({
                  ...orderStatus,
                  refunded: true,
                  partial: false,
                });
                clearInterval(timer.current);
              }}
              variant={ButtonVariants.blue}
              size={ButtonSizeVariants.extra_large}
              width="full"
              text="Refunded"
            />
            <Button
              onClick={() => {
                setOrderStatus({
                  ...orderStatus,
                  partial: true,
                  refunded: false,
                });
                clearInterval(timer.current);
              }}
              variant={ButtonVariants.blue}
              size={ButtonSizeVariants.extra_large}
              width="full"
              text="Partial"
            />
            <Button
              onClick={() => setCounter(counter + 1)}
              variant={ButtonVariants.blue}
              size={ButtonSizeVariants.extra_large}
              width="full"
              text="Start"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
