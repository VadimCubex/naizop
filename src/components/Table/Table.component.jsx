import React from "react";
import classNames from "classnames";

import TableRow from "./TableRowVariants/TableRow";
import {
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Text } from "../Text";

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
              variant !== TableVariants.Ranks &&
              variant !== TableVariants.Completed
                ? "-" + (index + 1)
                : ""
            }`}
            key={index}
          >
            <Text
              variant={
                variant !== TableVariants.Completed
                  ? TextVariants.subtitle_medium
                  : TextVariants.h2_medium
              }
            >
              {item}
            </Text>
          </div>
        ))}
      </div>
      <hr className="table-hr" />
      <div className="table-separators">
        {columnNames.map((item, index) => (
          <div
            className={`table-column-cell${
              variant !== TableVariants.Ranks &&
              variant !== TableVariants.Completed
                ? "-" + (index + 1)
                : ""
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
              <TableRow key={index} variant={variant} item={item} />
            </div>
            <div className="table-small-row-content">
              <div className="table-small-header">
                {columnNames.map((item, index) => (
                  <div
                    className={`table-column-cell${
                      variant !== TableVariants.Ranks &&
                      variant !== TableVariants.Completed
                        ? "-" + (index + 1)
                        : ""
                    }`}
                    key={index}
                  >
                    <Text variant={TextVariants.subtitle_medium}>{item}</Text>
                  </div>
                ))}
              </div>
              <div className="table-small-row">
                <TableRow key={index} variant={variant} item={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TableComponent.displayName = "Table";
