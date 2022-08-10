import React from "react";
import { useEffect } from "react";

import { ReasonsToUse } from "../../components/ReasonsToUse";

// import { Accordion } from "../../components/Accordion";
// import { Text } from "../../components/Text";
// import { FAQInfoFirstPart, FAQInfoSecondPart } from "./constants";
// import { TextVariants } from "../../constants/VariantsOfComponents";

const BestQualityService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="best-quality-service container background-img">
        <ReasonsToUse />
      </div>
    </>
  );
};

export default BestQualityService;
