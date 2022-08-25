import React from "react";
import { useEffect } from "react";

import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import { AmbassadorProgramms, GiveAwayTerms } from "./constants";
import { TextVariants } from "../../constants/VariantsOfComponents";

const Ambassador = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="ambassador">
        <div className="top">
          <Text variant={TextVariants.h1_medium}>Earn money</Text>
          <Text variant={TextVariants.h4_regular}>
            Earn Money Online Free with The help of YouTube, Forum, Google news
            and Quora. Payouts can be CASHED out or sent to your balance! (You
            can earn multiple times with multiple posts).
          </Text>
        </div>
        <div className="programms">
          {AmbassadorProgramms.map((item, index) => (
            <div key={index} className={"programm-card-" + (index + 1)}>
              <div className="title">
                <SvgIcon src={item.icon} size={32} />
                <Text variant={TextVariants.h2}>{item.title}</Text>
              </div>
              <Text variant={TextVariants.h4_regular}>{item.info}</Text>
            </div>
          ))}
        </div>
        <div className="separator"></div>
        <div className="bottom">
          <div className="block">
            <Text variant={TextVariants.h2}>Giveaway Terms</Text>
            <ul>
              {GiveAwayTerms.map((text, index) => (
                <li key={index}>
                  <Text variant={TextVariants.h5_regular}>{text}</Text>
                </li>
              ))}
            </ul>
          </div>
          <div className="block">
            <div>
              <Text variant={TextVariants.h2}>Disclaimer</Text>
              <Text variant={TextVariants.h5_regular}>
                Cloutsy will not be responsible for any damages you or your
                business may suffer.
              </Text>
            </div>
            <div className="separator"></div>
            <div>
              <Text variant={TextVariants.h2}>Liabilities</Text>
              <Text variant={TextVariants.h5_regular}>
                Cloutsy Panel no way liable for any account suspension or
                picture deletion done by YouTube, Soundcloud, Vine, Pinterest,
                or Other Social Media.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ambassador;
