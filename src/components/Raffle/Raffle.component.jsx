import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import classNames from "classnames";
import moment from "moment/moment";

import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { numberWithCommas } from "../../helpers/helpers";
import { Modal } from "../Modal";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

import { useRaffleActions } from "../../store/Raffle/useRaffleActions";
import { useRaffleSelector } from "../../store/Raffle/useRaffleSelector";

export const RaffleComponent = ({ isOpen, prize }) => {
  const RaffleClass = classNames("raffle");
  const timer = useRef(null);

  const { setIsOpenRaffle, ChangeRemainsDate } = useRaffleActions();
  const { startDate, remainsDate, endDate, entries } = useRaffleSelector();
  const [remain, setRemain] = useState(
    moment.duration(JSON.parse(remainsDate))
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    timer.current = setInterval(() => {
      ChangeRemainsDate();
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    setRemain(moment.duration(JSON.parse(remainsDate)));
  }, [remainsDate]);

  return (
    <Modal
      isOpen={isOpen}
      onClick={() => setIsOpenRaffle()}
      title="Weekly Raffle"
      className={RaffleClass}
    >
      <div className="range">
        <div className="date">
          <SvgIcon
            src={IconsVariants.Calendar}
            size={20}
            color={ColorSvgVariants.white}
          />
          <Text variant={TextVariants.h5_regular}>
            {startDate} - {endDate}
          </Text>
        </div>
        <div className="prize">
          <Text variant={TextVariants.h5}>Prize pool</Text>
          <Text variant={TextVariants.h5}>${numberWithCommas(prize)}.00</Text>
        </div>
      </div>
      <div className="remain">
        <div className="time">
          <Text className="value" variant={TextVariants.h1}>
            {remain.days().toString().padStart(2, "0")}
          </Text>
          <Text variant={TextVariants.h1}>&nbsp;:&nbsp;</Text>
          <Text className="value" variant={TextVariants.h1}>
            {remain.hours().toString().padStart(2, "0")}
          </Text>
          <Text variant={TextVariants.h1}>&nbsp;:&nbsp;</Text>
          <Text className="value" variant={TextVariants.h1}>
            {remain.minutes().toString().padStart(2, "0")}
          </Text>
          <Text variant={TextVariants.h1}>&nbsp;:&nbsp;</Text>
          <Text className="value" variant={TextVariants.h1}>
            {remain.seconds().toString().padStart(2, "0")}
          </Text>
        </div>
        <div className="indicators">
          <Text variant={TextVariants.h5_regular}>days</Text>
          <Text variant={TextVariants.h5_regular}>hours</Text>
          <Text variant={TextVariants.h5_regular}>minutes</Text>
          <Text variant={TextVariants.h5_regular}>seconds</Text>
        </div>
      </div>
      <div className="separator"></div>
      <div className="info">
        <div className="how">
          <div>
            <SvgIcon src={IconsVariants.Info_Circle} size={20} />
          </div>
          <div>
            <Text variant={TextVariants.h5}>How to enter the raffle:</Text>
            <Text variant={TextVariants.h5_regular}>
              For every $200 wagered, player receive one ticket. Players can get
              unlimited tickets. At the end of each raffle ten winners will
              chosen via random.org
            </Text>
          </div>
        </div>
        <div className="entries">
          <Text variant={TextVariants.h4}>
            Your number of entries: {entries}
          </Text>
        </div>
        <div className="detail">
          <Text variant={TextVariants.h5_regular}>
            For a detailed breakdown of the prize and payout structure, please
            visit the official announcement for this
          </Text>
          <Text variant={TextVariants.h5}>giveaway.</Text>
        </div>
      </div>
    </Modal>
  );
};

RaffleComponent.displayName = "Raffle";
