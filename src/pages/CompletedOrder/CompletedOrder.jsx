import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SvgIcon } from "../../components/SvgIcon";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { ColumnInfo, CompletedOrderTable } from "./constants";
import {
  ColorSvgVariants,
  IconsVariants,
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const CompletedOrder = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="completed-order container">
        <div className="completed-order-background"></div>
        <div className="block">
          <div className="close">
            <SvgIcon
              onClick={() => navigate("/")}
              src={IconsVariants.Close}
              size={24}
              color={ColorSvgVariants.white}
            />
          </div>
          <div className="top">
            <SvgIcon
              src={IconsVariants.Okay}
              size={80}
              color={ColorSvgVariants.yellow}
            />
            <Text variant={TextVariants.title}>Order completed!</Text>
          </div>
          <Table
            columnNames={ColumnInfo}
            data={CompletedOrderTable}
            variant={TableVariants.Completed}
          />
        </div>
      </div>
    </>
  );
};

export default CompletedOrder;
