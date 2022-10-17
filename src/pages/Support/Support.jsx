import React, { useEffect } from "react";
import { useState } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import {
  RedeemSubjectSelect,
  RedeemPlanSelect,
  SupportTicketColumns,
  SupportTicketInfo,
} from "./constants";
import {
  ButtonVariants,
  SelectOptionVariants,
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Support = () => {
  const [selectedSubject, setSelectedSubject] = useState(
    RedeemSubjectSelect[0]
  );
  const [selectedPlan, setSelectedPlan] = useState(RedeemPlanSelect[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="support">
        <Text variant={TextVariants.h1_medium}>Support</Text>
        <div className="block support-content">
          <Text variant={TextVariants.h3}>New Ticket</Text>
          <div>
            <div className="chunk">
              <div className="support-input">
                <Text variant={TextVariants.h3}>Subject</Text>
                <Select
                  setValue={setSelectedSubject}
                  value={selectedSubject}
                  variant={SelectOptionVariants.Default}
                  options={RedeemSubjectSelect}
                />
              </div>
              <div className="support-input">
                <Text variant={TextVariants.h3}>Selected plan</Text>
                <Select
                  setValue={setSelectedPlan}
                  value={selectedPlan}
                  variant={SelectOptionVariants.Default}
                  options={RedeemPlanSelect}
                />
              </div>
              <div className="support-input">
                <Text variant={TextVariants.h3}>Order ID:</Text>
                <Text variant={TextVariants.h5_regular}>
                  {`For multiple orders, please separate them using comma.
                    (example: 12345, 431122, 8934743)`}
                </Text>
                <Input placeholder="Enter ID..." />
              </div>
            </div>
            <div className="chunk">
              <div className="message">
                <Text variant={TextVariants.h3}>Message</Text>
                <Input multiline={true} placeholder="Enter message..." />
              </div>
              <div>
                <Button
                  variant={ButtonVariants.blue}
                  isLight={true}
                  width="full"
                  text="Submit ticket"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="block support-table">
          <Text variant={TextVariants.h3}>Your Ticket</Text>
          <Table
            variant={TableVariants.Tickets}
            columnNames={SupportTicketColumns}
            data={SupportTicketInfo}
          />
        </div>
      </div>
    </>
  );
};

export default Support;
