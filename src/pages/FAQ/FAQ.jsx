import React from "react";
import { Accordion } from "../../components/Accordion";
import { Text } from "../../components/Text";
import { FAQInfoFirstPart, FAQInfoSecondPart } from "../../constants/constants";
import { TextVariants } from "../../constants/VariantsOfComponents";
import classNames from "classnames";

const FAQ = ({ container = true, className }) => {
  const FAQClass = classNames({ container: container }, className);
  return (
    <>
      <div className={FAQClass}>
        <Text className="faq-title">FAQ</Text>
        <div className="faq-info-container">
          <div className="faq-info">
            {FAQInfoFirstPart.map((item, index) => (
              <div key={index} className="faq-accordion">
                <Accordion icon={item.icon} title={item.title}>
                  {item.info.map((text, index_text) => (
                    <Text key={index_text} variant={TextVariants.h5_regular}>
                      {text}
                    </Text>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          <div className="faq-info">
            {FAQInfoSecondPart.map((item, index) => (
              <div key={index} className="faq-accordion">
                <Accordion icon={item.icon} title={item.title}>
                  {item.info.map((text, index_text) => (
                    <Text key={index_text} variant={TextVariants.h5_regular}>
                      {text}
                    </Text>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
