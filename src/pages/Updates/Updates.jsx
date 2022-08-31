import React from "react";
import { useEffect } from "react";

import { UpdatesCard } from "../../components/Cards";
import { Filter } from "../../components/Filter";
import { Text } from "../../components/Text";
import {
  UpdatesDecreased,
  UpdatesEnabled,
  UpdatesIncreased,
  UpdatesNew,
} from "./constants";
import { TextVariants } from "../../constants/VariantsOfComponents";
import { FilterSubscriptions } from "../Subscriptions/constants";

const Updates = () => {
  const StatusMap = {
    new: "new",
    enabled: "enabled",
    decreased: "decreased",
    increased: "increased",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="updates">
        <Filter options={FilterSubscriptions} />
        <Text variant={TextVariants.h1_medium}>Updates</Text>
        <div className="updates-services-container">
          <div>
            {UpdatesDecreased.map((item, index) => (
              <UpdatesCard
                key={index}
                item={item}
                status={StatusMap.decreased}
              />
            ))}
          </div>
          <div>
            {UpdatesIncreased.map((item, index) => (
              <UpdatesCard
                key={index}
                item={item}
                status={StatusMap.increased}
              />
            ))}
          </div>
          <div>
            {UpdatesEnabled.map((item, index) => (
              <UpdatesCard key={index} item={item} status={StatusMap.enabled} />
            ))}
          </div>
          <div>
            {UpdatesNew.map((item, index) => (
              <UpdatesCard key={index} item={item} status={StatusMap.new} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
