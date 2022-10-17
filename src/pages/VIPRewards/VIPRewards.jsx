import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { AccountCard } from "../../components/Cards";
import { Modal } from "../../components/Modal";
import { ProgressBar } from "../../components/ProgressBar";
import { SvgIcon } from "../../components/SvgIcon";
import { Table } from "../../components/Table";
import { Tab, Tabs } from "../../components/Tabs";
import { Text } from "../../components/Text";
import { AccountStatusInfo, RanksColumnInfo, RanksTable } from "./constants";
import { Ranks } from "../../constants/constants";
import {
  TextVariants,
  ButtonVariants,
  AccountCardVariants,
  TableVariants,
  AvatarVariants,
  ButtonSizeVariants,
  TabsVariants,
  IconsVariants,
  ColorSvgVariants,
} from "../../constants/VariantsOfComponents";

import { useProfileInfoSelector } from "../../store/Profile/ProfileInfo/useProfileInfo";
import { useVIPRewardsActions } from "../../store/VIPRewards/useVIPRewardsActions";
import { useVIPRewardsSelector } from "../../store/VIPRewards/VIPRewardsTabs/useVIPRewardsTabs";

const VIPRewards = () => {
  const { img, balance, rank, percent, nextRank, totalCount } =
    useProfileInfoSelector();
  const [openModal, setOpenModal] = useState(false);
  const { activeTab, activeRank, unlocked } = useVIPRewardsSelector();
  const { ChangeRanksTab } = useVIPRewardsActions();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/support");
  };

  //! Transfer to the profile reducer afterwards
  const findNextRank = (currentRank) => {
    const next = Object.values(Ranks).findIndex(
      (item) => item.rank === currentRank
    );
    return Object.values(Ranks)[next + 1];
  };

  const handleClickTab = (event, active) => {
    ChangeRanksTab(active);
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
              <img src={Ranks[rank].icon} alt="" />
            </div>
            <div className="info">
              <div className="categories">
                <Text variant={TextVariants.h5_regular}>YOUR RANK</Text>
                <Text variant={TextVariants.h5_regular}>BALANCE</Text>
                <Text variant={TextVariants.h5_regular}>NEXT RANK</Text>
              </div>
              <div className="separator"></div>
              <div className="category-separators">
                <div>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="line"></div>
                </div>
                <div></div>
              </div>
              <div className="category-info">
                <Text variant={TextVariants.h2_medium}>{rank}</Text>
                <Text variant={TextVariants.h2_medium}>${balance}</Text>
                <Text variant={TextVariants.h2_medium}>
                  {findNextRank(rank).rank}
                  <Text className="rank" variant={TextVariants.h2_medium}>
                    &nbsp;($100)
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
                <img src={Ranks[rank].icon} alt="current rank" />
                <Text variant={TextVariants.h3}>{rank}</Text>
              </div>
              <Text variant={TextVariants.h4_regular}>
                {percent}% progress to {nextRank}
              </Text>
              <div className="rank">
                <Text variant={TextVariants.h3}>{nextRank}</Text>
                <img src={Ranks[nextRank].icon} alt="next rank" />
              </div>
            </div>
            <ProgressBar percent={percent} />
            <Text variant={TextVariants.h4_regular}>
              {percent}% progress to {nextRank}
            </Text>
          </div>
          <Button
            onClick={() => setOpenModal(!openModal)}
            text="View All Levels"
            variant={ButtonVariants.purchase}
            size={ButtonSizeVariants.small}
          />
        </div>
        <div className="block cards-container">
          <div className="tabs-container">
            <Tabs
              active={activeTab}
              onClick={handleClickTab}
              variant={TabsVariants.Outline}
            >
              {Object.values(Ranks).map((item, index) => (
                <Tab
                  key={index}
                  titleComponent={
                    <div className="tab-title">
                      <img src={item.icon} alt="current rank" />
                      <Text variant={TextVariants.h3}>{item.rank}</Text>
                    </div>
                  }
                />
              ))}
            </Tabs>
          </div>
          <div className="must-spend">
            <div>
              <div className="info">
                <img src={activeRank.icon} alt="next rank" />
                <Text variant={TextVariants.h3}>
                  You must spend ${activeRank.count}
                  <br /> to unlock {activeRank.rank}
                </Text>
              </div>
              {!unlocked.includes(activeRank.rank) ? (
                <div className="unlock">
                  <Button
                    variant={ButtonVariants.yellow}
                    size={ButtonSizeVariants.medium}
                    text="Unlock"
                    width="full"
                    isLight={true}
                    disabled={totalCount < activeRank.count}
                  />
                  {totalCount < activeRank.count ? (
                    <Text variant={TextVariants.h5_regular}>
                      Not claimble yet ${activeRank.count - totalCount}
                    </Text>
                  ) : null}
                </div>
              ) : (
                <div className="unlocked">
                  <SvgIcon
                    size={24}
                    src={IconsVariants.Done}
                    color={ColorSvgVariants.yellow}
                  />
                  <Text variant={TextVariants.h3}>Unlocked</Text>
                </div>
              )}
            </div>
          </div>
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
