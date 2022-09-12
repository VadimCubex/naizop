import React, { useState } from "react";
import { useEffect } from "react";

import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Text } from "../../components/Text";
import { ApiSelect } from "./constants";
import {
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Api = () => {
  const [selected, setSelected] = useState(ApiSelect[0]);
  const [apiKey, setApiKey] = useState(
    "************************************************"
  );
  const [method, setMethod] = useState("POST");
  const [url, setUrl] = useState("https://naizop.com/api/v2");
  const [resFormat, setResFormat] = useState("JSON");
  const [serviceAction, setServiceAction] = useState("services");
  const [addOrderAction, setAddOrderAction] = useState("add");
  const [addOrderService, setAddOrderService] = useState("Service ID");
  const [addOrderLink, setAddOrderLink] = useState("Link to page");
  const [addOrderQuantity, setAddOrderQuantity] = useState("Needed quantity");
  const [addOrderRuns, setAddOrderRuns] = useState("Runs to deliver");
  const [addOrderInterval, setAddOrderInterval] = useState(
    "Interval in minutes"
  );
  const [orderStatusAction, setOrderStatusAction] = useState("status");
  const [orderStatusOrder, setOrderStatusOrder] = useState("Order ID");
  const [multipleOrderStatusAction, setMultipleOrderStatusAction] =
    useState("status");
  const [multipleOrderStatusOrder, setMultipleOrderStatusOrder] = useState(
    "Order IDs separated by comma"
  );
  const [refillStatusAction, setRefillStatusAction] = useState("refill");
  const [refillStatusOrder, setRefillStatusOrder] = useState("Order ID");
  const [getRefillStatusAction, setGetRefillStatusAction] =
    useState("refill_status");
  const [getRefillStatusOrder, setGetRefillStatusOrder] = useState("Refill ID");
  const [balanceStatusAction, setBalanceStatusAction] = useState("balance");

  const [serviceExample, setServiceExample] = useState("Example");
  const [addOrderExample, setAddOrderExample] = useState("Example");
  const [orderStatusExample, setOrderStatusExample] = useState("Example");
  const [multipleOrderExample, setMultipleOrderExample] = useState("Example");
  const [refillExample, setRefillExample] = useState("Example");
  const [getRefillExample, setGetRefillExample] = useState("Example");
  const [balanceExample, setBalanceExample] = useState("Example");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="api">
        <Text variant={TextVariants.h1_medium}>API</Text>
        <div className="block">
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>HTTP Method</Text>
              <Input
                value={method}
                onChange={(e) => {
                  setMethod(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>API URL</Text>
              <Input
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>API Key</Text>
              <Input
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Response format</Text>
              <Input
                value={resFormat}
                onChange={(e) => {
                  setResFormat(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Service list</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input
                value={serviceAction}
                onChange={(e) => {
                  setServiceAction(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="api-textarea service">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input
              value={serviceExample}
              onChange={(e) => {
                setServiceExample(e.target.value);
              }}
              multiline={true}
            />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Add Order</Text>
          <div className="api-select">
            <Select
              value={selected}
              setValue={setSelected}
              variant={SelectOptionVariants.Default}
              options={ApiSelect}
            />
          </div>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input
                value={addOrderAction}
                onChange={(e) => {
                  setAddOrderAction(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Service</Text>
              <Input
                value={addOrderService}
                onChange={(e) => {
                  setAddOrderService(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Link</Text>
              <Input
                value={addOrderLink}
                onChange={(e) => {
                  setAddOrderLink(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Quantity</Text>
              <Input
                value={addOrderQuantity}
                onChange={(e) => {
                  setAddOrderQuantity(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Runs (optional)</Text>
              <Input
                value={addOrderRuns}
                onChange={(e) => {
                  setAddOrderRuns(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Interval (optional)</Text>
              <Input
                value={addOrderInterval}
                onChange={(e) => {
                  setAddOrderInterval(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="api-textarea add-order">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input
              value={addOrderExample}
              onChange={(e) => {
                setAddOrderExample(e.target.value);
              }}
              multiline={true}
            />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Order Status</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input
                value={orderStatusAction}
                onChange={(e) => {
                  setOrderStatusAction(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Order</Text>
              <Input
                value={orderStatusOrder}
                onChange={(e) => {
                  setOrderStatusOrder(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="api-textarea order-status">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input
              value={orderStatusExample}
              onChange={(e) => {
                setOrderStatusExample(e.target.value);
              }}
              multiline={true}
            />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Multiple orders status</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input
                value={multipleOrderStatusAction}
                onChange={(e) => {
                  setMultipleOrderStatusAction(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Orders</Text>
              <Input
                value={multipleOrderStatusOrder}
                onChange={(e) => {
                  setMultipleOrderStatusOrder(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="api-textarea multiple-orders">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input
              value={multipleOrderExample}
              onChange={(e) => {
                setMultipleOrderExample(e.target.value);
              }}
              multiline={true}
            />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Create refill</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input
                value={refillStatusAction}
                onChange={(e) => {
                  setRefillStatusAction(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Order</Text>
              <Input
                value={refillStatusOrder}
                onChange={(e) => {
                  setRefillStatusOrder(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="api-textarea refill">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input
              value={refillExample}
              onChange={(e) => {
                setRefillExample(e.target.value);
              }}
              multiline={true}
            />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Get refill status</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input
                value={getRefillStatusAction}
                onChange={(e) => {
                  setGetRefillStatusAction(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Refill</Text>
              <Input
                value={getRefillStatusOrder}
                onChange={(e) => {
                  setGetRefillStatusOrder(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="api-textarea get-refill">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input
              value={getRefillExample}
              onChange={(e) => {
                setGetRefillExample(e.target.value);
              }}
              multiline={true}
            />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>User balance</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                }}
              />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input
                value={balanceStatusAction}
                onChange={(e) => {
                  setBalanceStatusAction(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="api-textarea balance">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input
              value={balanceExample}
              onChange={(e) => {
                setBalanceExample(e.target.value);
              }}
              multiline={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
