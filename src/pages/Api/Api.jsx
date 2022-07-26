import React, { useState } from "react";
import { useEffect } from "react";

import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Text } from "../../components/Text";
import { ApiSelect } from "../../constants/constants";
import {
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Api = () => {
  const [selected, setSelected] = useState(ApiSelect[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="api">
        <Text variant={TextVariants.h1}>API</Text>
        <div className="block">
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>HTTP Method</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>API URL</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>API Key</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Response format</Text>
              <Input />
            </div>
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Service list</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input />
            </div>
          </div>
          <div className="api-textarea">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input multiline={true} />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Add Order</Text>
          <div className="api-select">
            <Select
              selected={selected}
              onClick={setSelected}
              variant={SelectOptionVariants.default}
              options={ApiSelect}
            />
          </div>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Service</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Link</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Quantity</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Runs (optional)</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Interval (optional)</Text>
              <Input />
            </div>
          </div>
          <div className="api-textarea">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input multiline={true} />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Order Status</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Order</Text>
              <Input />
            </div>
          </div>
          <div className="api-textarea">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input multiline={true} />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Multiple orders status</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Orders</Text>
              <Input />
            </div>
          </div>
          <div className="api-textarea">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input multiline={true} />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Create refill</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Order</Text>
              <Input />
            </div>
          </div>
          <div className="api-textarea">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input multiline={true} />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>Get refill status</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Refill</Text>
              <Input />
            </div>
          </div>
          <div className="api-textarea">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input multiline={true} />
          </div>
        </div>

        <div className="block">
          <Text variant={TextVariants.h3}>User balance</Text>
          <div className="api-inputs">
            <div className="api-input">
              <Text variant={TextVariants.h3}>Key</Text>
              <Input />
            </div>
            <div className="api-input">
              <Text variant={TextVariants.h3}>Action</Text>
              <Input />
            </div>
          </div>
          <div className="api-textarea">
            <Text variant={TextVariants.h3}>Example Response</Text>
            <Input multiline={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
