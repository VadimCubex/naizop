import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { AccountCard } from "../../components/Cards";
import { Modal } from "../../components/Modal";
import { ProgressBar } from "../../components/ProgressBar";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import {
  AccountStatusInfo,
  Ranks,
  RanksColumnInfo,
  RanksTable,
} from "./constants";
import {
  TextVariants,
  ButtonVariants,
  AccountCardVariants,
  TableVariants,
  AvatarVariants,
  RanksIcons,
  ButtonSizeVariants,
} from "../../constants/VariantsOfComponents";

import { useProfileInfoSelector } from "../../store/Profile/ProfileInfo/useProfileInfo";

const VIPRewards = () => {
  const { img, balance, rank, percent, nextRank } = useProfileInfoSelector();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/redeem-support");
  };

  //! Transfer to the profile reducer afterwards
  const findNextRank = (currentRank) => {
    const index = Ranks.findIndex((item) => item.rank === currentRank);
    return Ranks[index + 1];
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="vip-rewards">
        <Text variant={TextVariants.h1_medium}>VIP Rewards</Text>
        <div className="block profile">
          <Text variant={TextVariants.h2}>Welcome to our VIP program!</Text>

          <div>
            <div className="avatar-vip-rewards">
              <Avatar variant={AvatarVariants.lg} src={img} />
            </div>
            <div className="info">
              <div className="categories">
                <Text variant={TextVariants.h5}>YOUR RANK</Text>
                <Text variant={TextVariants.h5}>BALANCE</Text>
                <Text variant={TextVariants.h5}>NEXT RANK</Text>
              </div>
              <div className="separator"></div>
              <div className="category-info">
                <Text variant={TextVariants.h2_medium}>{rank}</Text>
                <Text variant={TextVariants.h2_medium}>${balance}</Text>
                <Text variant={TextVariants.h2_medium}>
                  {findNextRank(rank).rank}
                  <Text className="rank" variant={TextVariants.h2_medium}>
                    ($100)
                  </Text>
                </Text>
              </div>
            </div>
            <div className="redeem">
              <Button
                variant={ButtonVariants.blue}
                isLight="true"
                text="Redeem $"
                onClick={handleClick}
              />
              <Link to="/profile/redeem-history">
                <Text variant={TextVariants.h4}>Redeem history</Text>
              </Link>
            </div>
          </div>
        </div>
        <div className="block progress">
          <div className="percent">
            <div className="rank-info">
              <div className="rank">
                <img src={RanksIcons[rank]} alt="current rank" />
                <Text variant={TextVariants.h3}>{rank}</Text>
              </div>
              <Text variant={TextVariants.h4_regular}>
                {percent}% progress to {nextRank}
              </Text>
              <div className="rank">
                <Text variant={TextVariants.h3}>{nextRank}</Text>
                <img src={RanksIcons[nextRank]} alt="next rank" />
              </div>
            </div>
            <ProgressBar percent={percent} />
          </div>
          <Button
            onClick={() => setOpenModal(!openModal)}
            text="View All Levels"
            variant={ButtonVariants.purchase}
            size={ButtonSizeVariants.small}
          />
        </div>
        <div className="block cards-container">
          <Text className="title" variant={TextVariants.h3}>
            Account status
          </Text>
          <div className="cards">
            {AccountStatusInfo.map((item, index) => (
              <AccountCard
                key={index}
                variant={AccountCardVariants.lg}
                tooltip={item.tooltip}
                text={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal
        title="Ranks"
        isOpen={openModal}
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <hr className="separator" />
        <Table
          variant={TableVariants.Ranks}
          columnNames={RanksColumnInfo}
          data={RanksTable}
        />
      </Modal>
    </>
  );
};

export default VIPRewards;
