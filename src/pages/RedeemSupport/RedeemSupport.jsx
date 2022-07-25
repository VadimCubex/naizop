import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { AccountCard } from "../../components/Cards";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Text } from "../../components/Text";
import {
  RedeemSubjectSelect,
  RedeemPlanSelect,
} from "../../constants/constants";
import {
  ButtonVariants,
  InputVariants,
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const RedeemSupport = () => {
  const [activeTicket, setActiveTicket] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState(
    RedeemSubjectSelect[0]
  );
  const [selectedPlan, setSelectedPlan] = useState(RedeemPlanSelect[0]);
  return (
    <>
      <div className="support">
        <Text variant={TextVariants.h4}>
          <Link to="/profile">
            <Text>Dashboard -</Text>
          </Link>{" "}
          Support
        </Text>
        <div className="support-container">
          <Text variant={TextVariants.h1_medium}>Support</Text>
          <div className="support-tickets">
            <AccountCard
              onClick={() => {
                setActiveTicket(0);
              }}
              className={activeTicket === 0 && "active"}
              text="New Ticket"
            />
            <AccountCard
              onClick={() => {
                setActiveTicket(1);
              }}
              className={activeTicket === 1 && "active"}
              text="Your Ticket"
            />
          </div>
          <div className="block support-content">
            <div className="chunk">
              <div className="support-input">
                <Text variant={TextVariants.h3}>Subject</Text>
                <Select
                  onClick={setSelectedSubject}
                  selected={selectedSubject}
                  variant={SelectOptionVariants.default}
                  options={RedeemSubjectSelect}
                />
              </div>
              <div className="support-input">
                <Text variant={TextVariants.h3}>Selected plan</Text>
                <Select
                  onClick={setSelectedPlan}
                  selected={selectedPlan}
                  variant={SelectOptionVariants.default}
                  options={RedeemPlanSelect}
                />
              </div>
              <div className="support-input">
                <Text variant={TextVariants.h3}>Order ID:</Text>
                <Text variant={TextVariants.h5_regular}>
                  {`For multiple orders, please separate them using comma.
                  (example: 12345, 431122, 8934743)`}
                </Text>
                <Input variant={InputVariants.lg} placeholder="Enter ID..." />
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
      </div>
    </>
  );
};

export default RedeemSupport;