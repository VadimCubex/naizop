import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

const InstructionPayeer = () => {
  return (
    <div className="payeer">
      <div className="top">
        <ol>
          <li>Register and verify Wise.com account.</li>
          <li>Add balances Wise.com by Card, Bank, Stripe, Paypal.</li>
          <li>
            Send money to our email <span>digitincbd@gmail.com</span>
            <br /> Accept: USD (Wise to Wise), GBP, EUR, RUB, TRY and more
          </li>
          <li>
            After payment, take a ticket with transaction number and amount.
          </li>
        </ol>
        <Text variant={TextVariants.h5_regular}>
          We will add manually within 0-12 hours.
        </Text>
        <Text variant={TextVariants.h5}>
          **Don’t write any reference there**
        </Text>
      </div>

      <div className="bottom">
        <Text variant={TextVariants.h5_regular}>
          If you want send payment regulary, add our email in your recipient
          list.
        </Text>
        <Text variant={TextVariants.h5_regular}>How to add a recipient?</Text>
        <div className="list">
          <div className="list-item">
            <Text variant={TextVariants.h5_regular}>
              1. Check this:{" "}
              <a
                target="_blank"
                href="https://prnt.sc/2584fg3"
                rel="noreferrer"
              >
                https://prnt.sc/2584fg3
              </a>
            </Text>
          </div>
          <div className="list-item">
            <Text variant={TextVariants.h5_regular}>
              2. Click ON add a recipient button. See here:{" "}
              <a
                target="_blank"
                href="https://prnt.sc/2582o8r"
                rel="noreferrer"
              >
                https://prnt.sc/2582o8r
              </a>
            </Text>
          </div>
          <div className="list-item">
            <Text variant={TextVariants.h5_regular}>
              3. Select currency {">>"} Select recipient type Personal {">>"}
              Their email (digitincbd@gmail.com) {">>"} Bank details
              (Optional/No need)
            </Text>
          </div>
          <div className="list-item">
            <Text variant={TextVariants.h5_regular}>
              4. Finally click on confirm button. Check this:{" "}
              <a target="_blank" href="http://prnt.sc/25846u6" rel="noreferrer">
                http://prnt.sc/25846u6
              </a>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionPayeer;
