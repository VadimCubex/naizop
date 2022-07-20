import React from "react";
import classNames from "classnames";
import { Text } from "../Text";
import {
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

export const TableComponent = ({ data, columnNames, variant, className }) => {
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
      {variant !== TableVariants.Ranks && <hr className="table-hr" />}
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
              {Object.values(item.row).map((value, index_value) => (
                <div
                  className={`table-row-cell${
                    variant !== TableVariants.Ranks
                      ? "-" + (index_value + 1)
                      : ""
                  }`}
                  key={index_value}
                >
                  <Text variant={TextVariants.h5}>{value}</Text>
                </div>
              ))}
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
                {Object.values(item.row).map((value, index_value) => (
                  <div
                    className={`table-row-cell${
                      variant !== TableVariants.Ranks
                        ? "-" + (index_value + 1)
                        : ""
                    }`}
                    key={index_value}
                  >
                    <Text variant={TextVariants.h5}>{value}</Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TableComponent.displayName = "Table";
