import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { HowItWorks } from "../../components/HowItWorks";
import { Input } from "../../components/Input";
import { Instruction } from "../../components/Instruction";
import { Modal } from "../../components/Modal";
import { Number } from "../../components/Number";
import { Select } from "../../components/Select";
import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import { Payments } from "./constants";
import {
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  NumberVariants,
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Payment = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [username, setUsername] = useState("");

  const [selectedPayment, setSelectedPayment] = useState(Payments[0]);
  const [amount, setAmount] = useState(0);

  const navigate = useNavigate();

  const handleSendTip = () => {
    if (Math.floor(Math.random() * 2)) {
      navigate("/profile/add-funds/error");
    } else {
      setIsSend(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="payment">
        <Text variant={TextVariants.h1_medium}>Add funds</Text>
        <div className="payment-contant">
          <div className="block steps">
            <Text variant={TextVariants.h3}>3 steps</Text>
            <div className="step-1">
              <Number variant={NumberVariants.md} number={1} />
              <div className="info">
                <div className="content">
                  <Text variant={TextVariants.h3}>If paying with BTC -</Text>
                  <Text variant={TextVariants.h3_regular}>
                    Make sure to send the exact BTC amount and not USD amount
                  </Text>
                </div>
                <div className="separator"></div>
                <div className="content">
                  <Text variant={TextVariants.h3}>
                    If paying with ETH, USDC & USDT -
                  </Text>
                  <Text variant={TextVariants.h3_regular}>
                    Payments must be made via the ETH Network
                  </Text>
                </div>
              </div>
              <img src={IconsVariants.Step_arrow} alt="arrow" />
            </div>
            <div className="step-2">
              <Number variant={NumberVariants.md} number={2} />
              <Text variant={TextVariants.h3_regular}>
                Transaction can take ~40 Minutes to pass 3 network confirmations
              </Text>
              <img src={IconsVariants.Step_arrow} alt="arrow" />
            </div>
            <div className="step-3">
              <Number variant={NumberVariants.md} number={3} />
              <Text variant={TextVariants.h3_regular}>
                Your balance on Naizop will be updated automaticlly once
                approved with at least 3 network confirmations
              </Text>
            </div>
            <div>
              {selectedPayment.instruction && (
                <Instruction variant={selectedPayment.instruction} />
              )}
              <HowItWorks />
            </div>
          </div>
          <div className="block select-payment">
            <div className="top">
              <Text variant={TextVariants.h3}>Payment method</Text>
              <div className="tips">
                <Text variant={TextVariants.h3}>TIPS</Text>
              </div>
            </div>
            <hr />
            <div className="method">
              <Select
                value={selectedPayment}
                setValue={setSelectedPayment}
                variant={SelectOptionVariants.Default}
                options={Payments}
              />
            </div>
            <div className="amount">
              <Text variant={TextVariants.h3}>Amount</Text>
              <Input
                leftSide={<Text variant={TextVariants.h3}>$</Text>}
                rightSide={<Text variant={TextVariants.h3}>USD</Text>}
                value={amount.toFixed(2)}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
              />
            </div>
            <div className="proceed">
              <Text variant={TextVariants.h5}>DOUBLE CHECK BEFORE PAYING</Text>
              <Button
                variant={ButtonVariants.blue}
                text="Proceed"
                width="full"
                isLight={true}
                onClick={() => setIsShowModal(true)}
              />
              <Link to="/profile/add-funds/payment-history">
                <Text variant={TextVariants.h3}>Payment history</Text>
              </Link>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isShowModal}
          onClick={() => {
            setIsShowModal(false);
            setIsSend(false);
            setAmount(0);
          }}
          title={!isSend ? "TIPS" : ""}
        >
          {!isSend ? (
            <div className="tip">
              <div>
                <Text variant={TextVariants.h3}>Username</Text>
                <Input
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Enter username..."
                />
              </div>
              <div className="amount">
                <Text variant={TextVariants.h3}>Amount</Text>
                <Input
                  leftSide={<Text variant={TextVariants.h3}>$</Text>}
                  rightSide={<Text variant={TextVariants.h3}>USD</Text>}
                  value={amount.toFixed(2)}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <Text variant={TextVariants.h3}>Password</Text>
                <Input type="password" placeholder="Enter password..." />
              </div>
              <Button
                variant={ButtonVariants.blue}
                text="Send Tip"
                width="full"
                isLight={true}
                onClick={handleSendTip}
              />
            </div>
          ) : (
            <div className="tip-sent">
              <SvgIcon
                src={IconsVariants.Okay}
                size={80}
                color={ColorSvgVariants.yellow}
              />
              <Text className="title" variant={TextVariants.h3}>
                Tip Sent
              </Text>
              <Text variant={TextVariants.h4_regular}>
                You sent $ {amount.toFixed(2)}{" "}
                <div className="currency">
                  <Text variant={TextVariants.h4}>$</Text>
                </div>
                to <Text variant={TextVariants.h4}>{username}</Text>
              </Text>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
};

export default Payment;
