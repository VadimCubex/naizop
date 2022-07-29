import React from "react";
import { useEffect } from "react";
import classNames from "classnames";

import { Accordion } from "../../components/Accordion";
import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { InstagramServicesTables, ServiceColumnInfo } from "./constants";
import {
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const AllServices = ({ container = true, className }) => {
  const ServicesClass = classNames({ container: container }, className);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={ServicesClass}>
        <div className="services-top">
          <Filter withDropdown={true} />
          <Text variant={TextVariants.h1_medium} className="services-title">
            {container ? "SERVICES" : "All Services"}
          </Text>
        </div>
        <div className="services-info-container">
          {InstagramServicesTables.map((item, index) => (
            <Accordion
              key={index}
              icon={item[0]}
              title={item[1]}
              badges={item[2]}
            >
              <Table
                columnNames={ServiceColumnInfo}
                variant={TableVariants.Service}
                data={item[3]}
              />
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllServices;
