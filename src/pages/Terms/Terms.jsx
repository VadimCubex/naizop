import React from "react";
import { useEffect } from "react";

import { Text } from "../../components/Text";
import { TersmOfService } from "./constants";
import { TextVariants } from "../../constants/VariantsOfComponents";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="terms">
        <Text variant={TextVariants.h1_medium}>Terms of Service</Text>
        {TersmOfService.map((item, index) => (
          <div key={index} className="block">
            <Text variant={TextVariants.h3}>{item.title}</Text>
            <div className="info">
              {item.info.map((text, index) => (
                <Text key={index} variant={TextVariants.h4_regular}>
                  {text}
                </Text>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Terms;
