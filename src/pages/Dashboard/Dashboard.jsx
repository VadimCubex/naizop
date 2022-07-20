import React, { useState } from "react";
import { Text } from "../../components/Text";
import {
  TextVariants,
  ImagesVariants,
  ButtonVariants,
  AccountCardVariants,
  IconsVariants,
  TableVariants,
} from "../../constants/VariantsOfComponents";
import { AvatarDashboard } from "../../components/AvatarDashboard";
import {
  AccountPointsInfo,
  AccountStatusInfo,
  ProfileInfo,
  RanksColumnInfo,
  RanksInfo,
} from "../../constants/constants";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { AccountCard } from "../../components/Cards";
import { SvgIcon } from "../../components/SvgIcon";
import { ModalRanks } from "../../components/Modal";
import { Table } from "../../components/Table";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/support");
  };

  return (
    <>
      <div className="dashboard">
        <Text variant={TextVariants.h1_medium}>Dashboard</Text>
        <div className="info-container">
          <div className="avatar-dashboard">
            <AvatarDashboard
              progress={ProfileInfo.balance}
              src={ImagesVariants.profile}
            />
          </div>
          <div className="block profile">
            <div className="info">
              <div className="categories">
                <Text variant={TextVariants.h5}>BALANCE</Text>
                <Text variant={TextVariants.h5}>POINTS</Text>
                <Text variant={TextVariants.h5}>RATE</Text>
                <Text variant={TextVariants.h5}>NEXT RANK</Text>
              </div>
              <hr />
              <div className="category-info">
                <Text
                  variant={TextVariants.h2_medium}
                >{`$${ProfileInfo.balance}`}</Text>
                <Text
                  variant={TextVariants.h2_medium}
                >{`${ProfileInfo.points} ($0.00)`}</Text>
                <Text
                  variant={TextVariants.h2_medium}
                >{`${ProfileInfo.rate}`}</Text>
                <Text variant={TextVariants.h2_medium}>
                  {`${ProfileInfo.rank} `}
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
                text="Redeem $0.00 in points"
                onClick={handleClick}
              />
              <Link to="/profile/redeem-history">
                <Text variant={TextVariants.h4}>Redeem history</Text>
              </Link>
            </div>
            <div className="icons">
              <SvgIcon src={IconsVariants.Arc} size={60} />
              <SvgIcon
                style={{ position: "absolute", top: "7px", right: "7px" }}
                src={IconsVariants.Info_Circle}
                size={20}
                onClick={() => {
                  setOpenModal(true);
                }}
              />
            </div>
          </div>
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
        <div className="block cards-container">
          <Text className="title" variant={TextVariants.h3}>
            Account points
          </Text>
          <div className="cards">
            {AccountPointsInfo.map((item, index) => (
              <AccountCard
                key={index}
                variant={AccountCardVariants.sm}
                text={item}
              />
            ))}
          </div>
          <hr />
          <div className="points-description">
            <div>
              <SvgIcon src={IconsVariants.Info_Circle} size={20} />
            </div>
            <Text className="description" variant={TextVariants.h5_regular}>
              {`You earn points by ordering. Each $1 spent will equal a 100
              points. Each 100 points = $1 up to $2 depending on your Account
              status. You cannot redeem less than 100 points. To convert your
              points into funds, you must open a ticket and choose the subject
              "Points" and write down "Redeem All". To prevent spam, it will
              take a minimum of 3 days to convert your points into funds.`}
            </Text>
          </div>
        </div>
      </div>
      <ModalRanks
        isOpen={openModal}
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <hr className="separator" />
        <Table
          variant={TableVariants.Ranks}
          columnNames={RanksColumnInfo}
          data={RanksInfo}
        />
      </ModalRanks>
    </>
  );
};

export default Dashboard;
