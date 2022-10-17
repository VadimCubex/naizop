import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { CardSelect } from "../../components/CardSelect";
import { Checkbox } from "../../components/Checkbox";
import { Input } from "../../components/Input";
import { Instruction } from "../../components/Instruction";
import { Modal } from "../../components/Modal";
import { Number } from "../../components/Number";
import { SvgIcon } from "../../components/SvgIcon";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import {
  PaymentDownloadColumn,
  PaymentDownloadInfo,
  Payments,
} from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  ImagesVariants,
  NumberVariants,
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Payment = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [username, setUsername] = useState("");
  const [coupon, setCoupon] = useState("");
  const [policy, setPolicy] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState(Payments[0]);
  const [amount, setAmount] = useState(0);

  const handleSendTip = () => {
    setIsSend(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="payment">
        <Text variant={TextVariants.h1_medium}>Add funds</Text>
        <div className="payment-contant">
          <div className="select-payment-container">
            <div className="block select-payment">
              <div className="top">
                <Text variant={TextVariants.h3}>Payment method</Text>
                <div className="tips">
                  <Text variant={TextVariants.h3}>TIPS</Text>
                </div>
              </div>
              <hr />
              <div className="payment-tools">
                <div className="method">
                  <CardSelect
                    value={selectedPayment}
                    onClick={setSelectedPayment}
                    options={Payments}
                    isPayment={true}
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
                <div className="input-payment">
                  <Text variant={TextVariants.h3}>Use coupon (optional)</Text>
                  <div className="with-button">
                    <Input
                      placeholder="Enter your coupon..."
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <Button
                      width="full"
                      text="Apply"
                      variant={ButtonVariants.blue}
                      size={ButtonSizeVariants.medium}
                      isLight={true}
                    />
                  </div>
                </div>
                <Checkbox
                  value={policy}
                  onChange={() => setPolicy(!policy)}
                  text="I agree with Refund Policy & once I complete a payment."
                />
                <div className="proceed">
                  <Button
                    variant={ButtonVariants.yellow}
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
            <div className="block download">
              <Table
                variant={TableVariants.PaymentDownload}
                columnNames={PaymentDownloadColumn}
                data={PaymentDownloadInfo}
              />
            </div>
          </div>
          <div className="block payment-faq">
            <Text variant={TextVariants.h3}>FAQ</Text>
            <Accordion icon={IconsVariants.Question} title="3 payment steps">
              <div className="steps">
                <div className="step">
                  <div>
                    <Number variant={NumberVariants.sm} number={1} />
                  </div>
                  <div className="info">
                    <div>
                      <Text variant={TextVariants.h4}>
                        If paying with BTC -{" "}
                      </Text>
                      <Text variant={TextVariants.h4_regular}>
                        Make sure to send the exact BTC amount and not USD
                        amount
                      </Text>
                    </div>
                    <div>
                      <Text variant={TextVariants.h4}>
                        If paying with ETH, USDC & USDT -{" "}
                      </Text>
                      <Text variant={TextVariants.h4_regular}>
                        Payments must be made via the ETH Network
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="step">
                  <div>
                    <Number variant={NumberVariants.sm} number={2} />
                  </div>
                  <div>
                    <Text variant={TextVariants.h4_regular}>
                      Transaction can take ~40 Minutes to pass 3 network
                      confirmations
                    </Text>
                  </div>
                </div>
                <div className="step">
                  <div>
                    <Number variant={NumberVariants.sm} number={3} />
                  </div>
                  <div>
                    <Text variant={TextVariants.h4_regular}>
                      Your balance on Naizop will be updated automaticlly once
                      approved with at least 3 network confirmations
                    </Text>
                  </div>
                </div>
              </div>
            </Accordion>
            {selectedPayment.instruction && (
              <Accordion icon={IconsVariants.Question} title="Instruction">
                <Instruction variant={selectedPayment.instruction} />
              </Accordion>
            )}
            <Accordion
              icon={IconsVariants.Question}
              title="How it works? Let’s watch the video!"
            >
              <div className="video">
                <div className="play cursor-pointer">
                  <SvgIcon size={14} src={IconsVariants.Play} />
                </div>
                <img src={ImagesVariants.PaymentVideo} alt="payment video" />
              </div>
            </Accordion>
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
