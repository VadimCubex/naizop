import React, { useState } from "react";
import { useEffect } from "react";

import { HowItWorks } from "../../components/HowItWorks";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Text } from "../../components/Text";
import { Payments } from "./constants";
import {
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(Payments[0]);
  const [amount, setAmount] = useState(75);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="payment">
        <Text variant={TextVariants.h1}>Add funds</Text>
        <div className="payment-contant">
          <div className="block">
            <Text variant={TextVariants.h3}>3 steps</Text>
            <HowItWorks />
          </div>
          <div className="block select-payment">
            <div className="top">
              <Text variant={TextVariants.h3}>Payment method</Text>
              <div className="tips">
                <Text variant={TextVariants.h3}>TIPS</Text>
              </div>
            </div>
            <hr />
            <Select
              onClick={setSelectedPayment}
              selected={selectedPayment}
              variant={SelectOptionVariants.default}
              options={Payments}
            />
            <div className="amount">
              <Text variant={TextVariants.h3}>Amount</Text>
              <Input
                leftSide={<Text variant={TextVariants.h3}>$</Text>}
                rightSide={<Text variant={TextVariants.h3}>USD</Text>}
                value={amount.toFixed(2)}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
